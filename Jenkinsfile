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
      steps {
        echo "Removing Current Container"
        sh("""
        if [ $( docker ps -a | grep ci-cd-test | wc -l ) -gt 0 ]; then
          docker stop ci-cd-test && docker remove ci-cd-test
          echo "Containers stopped"
        else
          echo "No containers found"
        fi
        """)
      }
    }

    stage("Deploy") {
      steps {
        echo "Deploying..."
        sh "docker run -p 80:3000 --name ci-cd-test -d ci-cd-test:latest"
      }
    }

  }

}