pipeline {
    agent {
        // Utilisation d'une image Docker Node.js pour un environnement cohérent
        docker {
            image 'node:lts-slim'
            args '-u root'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Installe Jest et les dépendances
            }
        }

        stage('Run Tests') {
            steps {
		echo 'Running Jest tests...'
                sh 'npm test' // Exécute les tests et génère reports/junit.xml
		sh 'chmod 777 test-results.xml'
            }
        }

        stage('Publish Results') {
            steps {
                echo 'Publishing JUnit test results...'
                junit 'test-results.xml'
            }
        }
    }

    post {
        always {
            cleanWs() // Nettoie l'espace de travail après le Job
        }
        success {
            echo '✅ Pipeline succeeded! CI done.'
        }
        failure {
            echo '❌ Pipeline failed! Review tests and code.'
        }
    }
}
