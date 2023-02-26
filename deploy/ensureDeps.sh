#!/bin/bash

# any future command that fails will exit the script
set -e

echo "CHECKING NPM"

if ! [ -x "$(command -v npm)" ]; then
  echo 'NPM NOT FOUND'
  
  echo 'INSTALLING NPM'

  export NVM_DIR=$HOME/.nvm;
  source $NVM_DIR/nvm.sh;
fi