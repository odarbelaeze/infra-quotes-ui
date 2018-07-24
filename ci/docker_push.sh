echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push odarbelaeze/quotes-ui:$TRAVIS_COMMIT
