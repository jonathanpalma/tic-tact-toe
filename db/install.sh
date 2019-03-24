#!/bin/bash
set -o nounset -o errexit

## Setups mongodb in the local environment

which docker

if [ $? -eq 0 ]
then
    docker --version | grep "Docker version"
    if [ $? -eq 0 ]
    then
      echo "Starting build process..."

      if [[ "$(docker images -q db 2> /dev/null)" == "" ]]; then
        echo "Proceding to create image..."
        docker image build -t db .
      else
        echo "Database image already exist"
      fi

      if [ ! "$(docker container ls -q -f name=db)" ]; then
        if [ "$(docker container ls -aq -f status=exited -f name=db)" ]; then
          echo "Starting container..."
          docker container start db
        else
          echo "Creating container..."
          docker run -d --name db -p 27017:27017 -v mongodb-data:/bitnami db
        fi
      else 
        echo "Container already running"
      fi
    else
        echo "Please, install docker"
    fi
else
    echo "Please, install docker" >&2
fi