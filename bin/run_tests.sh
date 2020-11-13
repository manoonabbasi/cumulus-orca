#!/bin/sh
#TODO This needs to be better organized
set -e
base=$(pwd)
failed=0

for taskdir in tasks/*/
do
  cd $taskdir
  rm -rf venv
  python3 -m venv venv
  source venv/bin/activate
  pip install -r requirements-dev.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org
  coverage run --source $(basename $taskdir) -m pytest
  result=$?
  if [[ $result -eq 1 ]]; then
    failed=1
  fi
  coverage report
  deactivate
  cd base
done

return failed
