pipeline {
    agent any
    environment {
        APP_SERVER = '16.176.26.57'
        REMOTE_USER = 'ubuntu'
        REMOTE_DIR = '/var/www/myapp'
        SSH_CRED_ID = 'deploy-ssh-key'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Adarsh09675/Demoapp12.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                nodejs('node20') {
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                nodejs('node20') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent (credentials: [SSH_CRED_ID]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${APP_SERVER} 'mkdir -p ${REMOTE_DIR}'
                        scp -o StrictHostKeyChecking=no -r build/* ${REMOTE_USER}@${APP_SERVER}:${REMOTE_DIR}
                        ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${APP_SERVER} 'sudo cp -r ${REMOTE_DIR}/* /var/www/html/'
                    """
                }
            }
        }
    }
}

