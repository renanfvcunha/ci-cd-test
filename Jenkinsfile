pipeline {

  agent any

  stages {

    stage("Remove Current Container and Image") {
      steps {
        echo "Removing Current Container and Current Image..."
        sh '''if [ $( docker ps -a | grep ci-cd-test | wc -l ) -gt 0 ]; then
          docker stop ci-cd-test && docker rm ci-cd-test
          docker rmi ci-cd-test:latest
          echo "Containers stopped"
        else
          echo "No containers running found"
        fi'''
      }
    }

    stage("Build Docker Image") {
      steps {
        echo "Building Docker Image..."
        sh "docker build -t ci-cd-test:latest ."
      }
    }

    stage("Deploy") {
      steps {
        echo "Running Container..."
        sh "docker run -p 80:3000 --name ci-cd-test -d ci-cd-test:latest"
      }
    }

  }

}