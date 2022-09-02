#!/bin/bash
## =============================================================================
## NAME: build.sh
##
##
## DESCRIPTION
## -----------------------------------------------------------------------------
## Builds the lambda (task) zip file for internal_reconcile_report_orphan.
##
##
## USAGE
## -----------------------------------------------------------------------------
## bin/build.sh
##
## This must be called from the (root) lambda directory /tasks/internal_reconcile_report_orphan
## =============================================================================

## Set this for Debugging only
#set -ex

## Make sure we are calling the script the correct way.
BASEDIR=$(dirname $0)
if [ "$BASEDIR" != "bin" ]; then
  >&2 echo "ERROR: This script must be called from the root directory of the task lambda [bin/build.sh]."
  exit 1
fi


## FUNCTIONS
## -----------------------------------------------------------------------------
function check_rc () {
  ## Checks the return code of call and if not equal to 0, emits an error and
  ## exits the script with a failure.
  ##
  ## Args:
  ##   $1 - Return Code from command
  ##   $2 - Error message if failure occurs.

  let RC=$1
  MESSAGE=$2

  if [ $RC -ne 0 ]; then
      >&2 echo "$MESSAGE"
      deactivate
      exit 1
  fi
}

## MAIN
## -----------------------------------------------------------------------------
## Create the build directory. Remove it if it exists.
echo "INFO: Creating build directory ..."
if [ -d build ]; then
    rm -rf build
fi

mkdir build
let return_code=$?
check_rc $return_code "ERROR: Failed to create build directory."

mkdir build/adapters
let return_code=$?
check_rc $return_code "ERROR: Failed to create adapters directory."

mkdir build/use_cases
let return_code=$?
check_rc $return_code "ERROR: Failed to create use_cases directory."

mkdir build/entities
let return_code=$?
check_rc $return_code "ERROR: Failed to create entities directory."

## Create the virtual env. Remove it if it already exists.
echo "INFO: Creating virtual environment ..."
if [ -d venv ]; then
  rm -rf venv
  find . -type d -name "__pycache__" -exec rm -rf {} +
fi

python3 -m venv venv
source venv/bin/activate

## Install the requirements
pip install -q --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org
pip install -q -t build -r requirements.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org
let return_code=$?
check_rc $return_code "ERROR: pip install encountered an error."

# Install the aws-lambda psycopg2 libraries
mkdir -p build/psycopg2

##TODO: Adjust build scripts to put shared packages needed under a task/build/packages directory.
##      and copy the packages from there.
if [ ! -d "../package" ]; then
    mkdir -p ../package
    let return_code=$?
    check_rc $return_code "ERROR: Unable to create tasks/package directory."
fi

if [ ! -d "../package/awslambda-psycopg2/psycopg2-3.9" ]; then
  rm -d -f -r "../package/awslambda-psycopg2"
fi
if [ ! -d "../package/awslambda-psycopg2" ]; then
    ## TODO: This should be pulling based on a release version instead of latest
    git clone https://github.com/jkehler/awslambda-psycopg2.git ../package/awslambda-psycopg2
    let return_code=$?
    check_rc $return_code "ERROR: Unable to retrieve awslambda-psycopg2 code."
fi

cp ../package/awslambda-psycopg2/psycopg2-3.9/* build/psycopg2/
let return_code=$?
check_rc $return_code "ERROR: Unable to install psycopg2."


## Copy the lambda files to build
echo "INFO: Copying base Python files ..."
cp *.py build/
let return_code=$?
check_rc $return_code "ERROR: Failed to copy base Python files to build directory."

echo "INFO: Copying adapter Python files ..."
find ./adapters -name '*.py' | xargs cp --parents -t build/adapters/
let return_code=$?
check_rc $return_code "ERROR: Failed to copy adapter files to build directory."

echo "INFO: Copying use-case Python files ..."
find ./use_cases -name '*.py' | xargs cp --parents -t build/use_cases/
let return_code=$?
check_rc $return_code "ERROR: Failed to copy use-case files to build directory."

echo "INFO: Copying entity Python files ..."
find ./entities -name '*.py' | xargs cp --parents -t build/entities/
let return_code=$?
check_rc $return_code "ERROR: Failed to copy entities files to build directory."

## Copy the schema files to build
echo "INFO: Copying schema files ..."
cp -r schemas/ build/
let return_code=$?
check_rc $return_code "ERROR: Failed to copy schema files to build directory."

## Create the zip archive
echo "INFO: Creating zip archive ..."
cd build
zip -qr ../internal_reconcile_report_orphan.zip .
let return_code=$?
check_rc $return_code "ERROR: Failed to create zip archive."
cd -

## Perform cleanup
echo "INFO: Cleaning up build ..."
deactivate
rm -rf build

exit 0