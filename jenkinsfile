pipeline {
  agent any

  environment {
    APP_DIR = "/var/www/Demoapp12"
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/Adarsh09675/Demoapp12.git', branch: 'main'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'node -v && npm -v'
        sh 'npm ci'
      }
    }

    stage('Build React app') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy to nginx') {
      steps {
        sh '''
          rm -rf ${APP_DIR}/*
          cp -r build/* ${APP_DIR}/
          chmod -R 755 ${APP_DIR}
        '''
      }
    }
  }

  post {
    success {
      echo '✅ Build and deploy completed successfully!'
    }
    failure {
      echo '❌ Build or deploy failed.'
    }
  }
}
