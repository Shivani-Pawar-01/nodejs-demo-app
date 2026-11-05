# Node.js Demo App – CI/CD Pipeline using GitHub Actions

## Project Overview
This project demonstrates the automation of a Node.js web application deployment using a CI/CD pipeline with GitHub Actions, Docker, and Docker Hub.

## Objective
To automate application testing, Docker image building, and image publishing using GitHub Actions.

## Technologies Used
- Node.js
- Express.js
- Jest
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub
- AWS EC2 (Ubuntu)

## Application Features
- Home endpoint (`/`) displays a welcome message.
- Health endpoint (`/health`) returns the application status.
- Automated tests validate application endpoints.

## CI/CD Pipeline Workflow
The pipeline is triggered whenever code is pushed to the `main` branch.

Pipeline steps:
1. Checkout source code.
2. Set up Node.js.
3. Install dependencies.
4. Run automated tests.
5. Build the Docker image.
6. Authenticate with Docker Hub using GitHub Secrets.
7. Push the Docker image to Docker Hub.

## Docker Hub Image
`shivani0104/nodejs-demo-app:latest`

## Run the Application Locally

### Install dependencies
```bash
npm install
```

### Run tests
```bash
npm test
```

### Start the application
```bash
npm start
```

Application runs on port 3000.

## Run Using Docker

### Pull the image
```bash
docker pull shivani0104/nodejs-demo-app:latest
```

### Run the container
```bash
docker run -d -p 3000:3000 --name nodejs-demo-container shivani0104/nodejs-demo-app:latest
```

### Test endpoints
```bash
curl http://localhost:3000/
curl http://localhost:3000/health
```

## GitHub Actions Secrets
The following secrets are configured in the GitHub repository:
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

Sensitive credentials are stored securely using GitHub Actions Secrets.

## Deployment
The Docker image is pulled and run on an AWS EC2 Ubuntu instance. The application endpoints were verified successfully.

## Conclusion
This project demonstrates a basic CI/CD workflow that automates testing, Docker image building, and publishing to Docker Hub using GitHub Actions.
