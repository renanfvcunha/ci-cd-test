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
        sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 000055091584.dkr.ecr.us-east-1.amazonaws.com"
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