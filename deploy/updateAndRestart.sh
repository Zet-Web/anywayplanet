#!/bin/bash

# any future command that fails will exit the script
set -e

echo "UPDATING AND RESTARTING"

echo "DELETING /home/ubuntu/app"

# Delete the old repo
rm -rf /home/ubuntu/app

echo "OLD SOURCE IS DELETED"

# echo (which npm)
# echo (pwd)
# echo $PATH

echo "CLONING FROM git@git.softndit.com:moon-tycoon/frontend.git TO /home/ubuntu/app"

# clone the repo again
git clone git@git.softndit.com:moon-tycoon/frontend.git /home/ubuntu/app

echo "NEW SOURCE IS AVAILABLE AT /home/ubuntu/app"

cd /home/ubuntu/app

echo "ENSURING THE DEPENDENCIES ARE AVAILABLE"
# sudo ./deploy/ensureDeps.sh
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;
echo "DEPENDENCIES ARE OK"

npm run docker:stop

# #install npm packages
# echo "Running npm install"
# npm install

#Restart the node server
npm run docker:start
