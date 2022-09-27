pipeline {

  agent any

  stages {

    stage("Build Docker Image") {
      steps {
        echo "Building Docker Image..."
        sh "docker build -t ci-cd-test ."
      }
    }

    stage("Tag Docker Image") {
      steps {
        echo "Tagging Docker Image..."
      }
    }

    stage("Push Image to Repository") {
      steps {
        echo "Pushing Image to Repository..."
      }
    }

    stage("Deploy") {
      steps {
        echo "Deploying..."
      }
    }

  }

}