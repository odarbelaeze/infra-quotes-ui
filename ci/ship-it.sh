wget https://github.com/github/hub/releases/download/v2.5.0/hub-linux-amd64-2.5.0.tgz
tar xvzf hub-linux-amd64-2.5.0
export PATH=$PWD/hub-linux-amd64-2.5.0:$PATH
hub version
