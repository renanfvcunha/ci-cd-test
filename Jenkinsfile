pipeline {

  agent any

  stages {

    stage("Remove Current Container and Image") {
      steps {
        echo "Removing current container and current image..."
        sh '''if [ $( docker ps -a | grep ci-cd-test | wc -l ) -gt 0 ]; then
          docker stop ci-cd-test && docker rm ci-cd-test
          docker rmi ci-cd-test:latest
          echo "Container and image removed"
        else
          echo "No container running found"
        fi'''
      }
    }

    stage("Build Docker Image") {
      steps {
        echo "Building docker image..."
        sh "docker build -t ci-cd-test:latest ."
      }
    }

    stage("Deploy") {
      steps {
        echo "Running container..."
        sh "docker run -p 80:3000 --name ci-cd-test --restart=always -d ci-cd-test:latest"
      }
    }

  }

}