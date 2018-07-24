echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker tag odarbelaeze/quotes-ui:$TRAVIS_COMMIT odarbelaeze/quotes-ui:latest
docker push odarbelaeze/quotes-ui:$TRAVIS_COMMIT
docker push odarbelaeze/quotes-ui:latest

