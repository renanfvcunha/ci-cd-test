#!/bin/bash

if [ $( docker ps -a | grep rabbitmq | wc -l ) -gt 0 ]; then
  docker stop rabbitmq
  echo "Containers stopped"
else
  echo "No containers running found"
fi