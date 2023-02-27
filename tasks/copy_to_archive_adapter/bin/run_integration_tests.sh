#!/bin/bash
## =============================================================================
## NAME: run_integration_tests.sh
##
##
## DESCRIPTION
## -----------------------------------------------------------------------------
## Runs the integration tests.
##
##
## USAGE
## -----------------------------------------------------------------------------
## bin/run_integration_tests.sh
##
## This must be called from the (root) directory tasks/copy_to_archive_adapter
## =============================================================================

## Set this for Debugging only
#set -ex

## Make sure we are calling the script the correct way.
BASEDIR=$(dirname $0)
if [ "$BASEDIR" != "bin" ]; then
  >&2 echo "ERROR: This script must be called from the root directory of lambda task[bin/run_integration_tests.sh]."
  exit 1
fi


source ../../bin/common/check_returncode.sh
source ../../bin/common/venv_management.sh


## MAIN
## -----------------------------------------------------------------------------
run_and_check_returncode "create_and_activate_venv"
trap 'deactivate_and_delete_venv' EXIT
run_and_check_returncode "pip install -q --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org"

## Install the requirements
pip install -q -r requirements.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org
check_returncode $? "ERROR: pip install encountered an error."


## Check code formatting and styling
echo "INFO: Checking formatting and style of code ..."
echo "INFO: Sorting imports ..."
isort \
    --trailing-comma \
    --ensure-newline-before-comments \
    --line-length 88 \
    --use-parentheses \
    --force-grid-wrap 0 \
    -m 3 \
    integration_test_copy_to_archive_adapter.py

echo "INFO: Formatting with black ..."
black integration_test_copy_to_archive_adapter.py


echo "INFO: Checking lint rules ..."
flake8 \
    --max-line-length 99 \
    integration_test_copy_to_archive_adapter.py
check_returncode $? "ERROR: Linting issues found."


## Run code smell and security tests using bandit
echo "INFO: Running code smell security tests ..."
bandit -r integration_test_copy_to_archive_adapter.py
check_returncode $? "ERROR: Potential security or code issues found."


## Run tests
echo "INFO: Running integration tests ..."
python integration_test_copy_to_archive_adapter.py
check_returncode $? "ERROR: Unit tests encountered failures."