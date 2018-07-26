wget https://github.com/github/hub/releases/download/v2.5.0/hub-linux-amd64-2.5.0.tgz
tar xvzf hub-linux-amd64-2.5.0.tgz
export PATH="$(pwd)/hub-linux-amd64-2.5.0:$PATH"
echo $PATH
hub version
