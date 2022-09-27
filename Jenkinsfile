pipeline {

  agent any

  stages {

    stage("Build Docker Image") {
      steps {
        echo "Building Docker Image..."
        sh "docker build -t ci-cd-test:latest ."
      }
    }

    stage("Remove Current Container") {
      echo "Removing Current Container"
      sh "docker container ps -aq | xargs docker stop | xargs docker rm"
    }

    stage("Deploy") {
      steps {
        echo "Deploying..."
        sh "docker run -p 80:3000 --name ci-cd-test -d ci-cd-test:latest"
      }
    }

  }

}