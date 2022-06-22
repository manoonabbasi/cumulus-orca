import json
import os
from http import HTTPStatus
from typing import Any, Dict, List, Union

import fastjsonschema as fastjsonschema
from cumulus_logger import CumulusLogger
from fastjsonschema import JsonSchemaException
from orca_shared.database import shared_db
from orca_shared.database.shared_db import retry_operational_error
from sqlalchemy import text
from sqlalchemy.future import Engine

OS_ENVIRON_DB_CONNECT_INFO_SECRET_ARN_KEY = "DB_CONNECT_INFO_SECRET_ARN"  # nosec
OUTPUT_JOB_ID_KEY = "jobId"
OUTPUT_ANOTHER_PAGE_KEY = "anotherPage"
OUTPUT_ORPHANS_KEY = "orphans"
ORPHANS_KEY_PATH_KEY = "keyPath"
ORPHANS_S3_ETAG_KEY = "s3Etag"
ORPHANS_S3_LAST_UPDATE_KEY = "s3FileLastUpdate"
ORPHANS_S3_SIZE_IN_BYTES_KEY = "s3SizeInBytes"
ORPHANS_STORAGE_CLASS_KEY = "storageClass"

LOGGER = CumulusLogger()

PAGE_SIZE = 100

# Generating schema validators can take time, so do it once and reuse.
try:
    with open("schemas/input.json", "r") as raw_schema:
        input_schema = json.loads(raw_schema.read())
        _VALIDATE_INPUT = fastjsonschema.compile(input_schema)
    with open("schemas/output.json", "r") as raw_schema:
        output_schema = json.loads(raw_schema.read())
        _VALIDATE_OUTPUT = fastjsonschema.compile(output_schema)
except Exception as ex:
    LOGGER.error(f"Could not build schema validator: {ex}")
    raise

def task(
    job_id: int,
    page_index: int,
    db_connect_info: Dict[str, str],
) -> Dict[str, Any]:
    """
    Args:
        job_id: The unique ID of job/report.
        page_index: The 0-based index of the results page to return.
        db_connect_info: See requests_db.py's get_configuration for further details.
    """
    engine = shared_db.get_user_connection(db_connect_info)
    granules = query_db(
        engine,
        job_id,
        page_index,
    )

    return {
        OUTPUT_JOB_ID_KEY: job_id,
        OUTPUT_ANOTHER_PAGE_KEY: len(granules) > PAGE_SIZE,
        OUTPUT_ORPHANS_KEY: granules[
            0:PAGE_SIZE
        ],  # we get one extra for anotherPage calculation.
    }


@retry_operational_error()
def query_db(
    engine: Engine,
    job_id: str,
    page_index: int,
) -> List[Dict[str, Any]]:
    """
    Gets orphans for the given job/page, up to PAGE_SIZE + 1 results.

    Args:
        engine: The sqlalchemy engine to use for contacting the database.
        job_id: The unique ID of job/report.
        page_index: The 0-based index of the results page to return.

    Returns:
        A list containing dicts matching the format of "orphans" in output.json.
    """
    LOGGER.info(f"Retrieving page '{page_index}' of reports for job '{job_id}'")
    with engine.begin() as connection:
        sql_results = connection.execute(
            get_orphans_sql(),
            [
                {
                    "job_id": job_id,
                    "page_index": page_index,
                    "page_size": PAGE_SIZE,
                }
            ],
        )

        orphans = []
        for sql_result in sql_results:
            orphans.append(
                {
                    ORPHANS_KEY_PATH_KEY: sql_result["key_path"],
                    ORPHANS_S3_ETAG_KEY: sql_result["etag"],
                    ORPHANS_S3_LAST_UPDATE_KEY: sql_result["last_update"],
                    ORPHANS_S3_SIZE_IN_BYTES_KEY: sql_result["size_in_bytes"],
                    ORPHANS_STORAGE_CLASS_KEY: sql_result["storage_class"],
                }
            )
        return orphans


def get_orphans_sql() -> text:
    """
    SQL for getting orphan report entries for a given job_id, page_size, and page_index.
    Formats datetimes in milliseconds since 1 January 1970 UTC.
    """
    return text(
        """
SELECT
    key_path,
    etag,
    (EXTRACT(EPOCH FROM date_trunc('milliseconds', last_update) AT TIME ZONE 'UTC') * 1000)::bigint as last_update,
    size_in_bytes,
    storage_class
    FROM reconcile_orphan_report
    WHERE job_id = :job_id
    ORDER BY key_path, etag
    OFFSET :page_index*:page_size
    LIMIT :page_size+1"""
    )


def create_http_error_dict(
    error_type: str, http_status_code: int, request_id: str, message: str
) -> Dict[str, Any]:
    """
    Creates a standardized dictionary for error reporting.
    Args:
        error_type: The string representation of http_status_code.
        http_status_code: The integer representation of the http error.
        request_id: The incoming request's id.
        message: The message to display to the user and to record for debugging.
    Returns:
        A dict with the following keys:
            'errorType' (str)
            'httpStatus' (int)
            'requestId' (str)
            'message' (str)
    """
    LOGGER.error(message)
    return {
        "errorType": error_type,
        "httpStatus": http_status_code,
        "requestId": request_id,
        "message": message,
    }


def check_env_variable(env_name: str) -> str:
    """
    Checks for the lambda environment variable.
    Args:
        env_name (str): The environment variable name set in lambda configuration.
    Raises: KeyError in case the environment variable is not found.
    """
    try:
        env_value = os.environ[env_name]
        if len(env_value) == 0 or env_value is None:
            raise KeyError(f"Empty value for {env_name}")
    except KeyError:
        LOGGER.error(f"{env_name} environment value not found.")
        raise

    return env_value


def handler(
    event: Dict[str, Union[str, int]], context: Any
) -> Union[List[Dict[str, Any]], Dict[str, Any]]:
    """
    Entry point for the internal_reconcile_report_orphan Lambda.
    Args:
        event: See schemas/input.json for details.
        context: An object provided by AWS Lambda. Used for context tracking.

    Environment Vars:
        DB_CONNECT_INFO_SECRET_ARN (string): Secret ARN of the AWS secretsmanager secret for connecting to the database.
        See shared_db.py's get_configuration for further details.

    Returns:
        See schemas/output.json
        Or, if an error occurs, see create_http_error_dict
            400 if input does not match schemas/input.json. 500 if an error occurs when querying the database.
    """
    try:
        LOGGER.setMetadata(event, context)

        try:
            _VALIDATE_INPUT(event)
        except JsonSchemaException as json_schema_exception:
            return create_http_error_dict(
                "BadRequest",
                HTTPStatus.BAD_REQUEST,
                context.aws_request_id,
                json_schema_exception.__str__(),
            )

        db_connect_info = shared_db.get_configuration(
            check_env_variable(OS_ENVIRON_DB_CONNECT_INFO_SECRET_ARN_KEY)
        )

        result = task(
            event["jobId"],
            event["pageIndex"],
            db_connect_info,
        )
        _VALIDATE_OUTPUT(result)

        return result
    except Exception as error:
        return create_http_error_dict(
            "InternalServerError",
            HTTPStatus.INTERNAL_SERVER_ERROR,
            context.aws_request_id,
            error.__str__(),
        )