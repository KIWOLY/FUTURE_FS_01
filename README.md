


##  Cloud-Native Portfolio Deployment (DevOps Project)

##  Project Overview

This project is a cloud-native portfolio application designed to demonstrate real-world DevOps engineering skills.

It showcases how a modern application is:

- Containerized using Docker  
- Automatically deployed using CI/CD pipelines  
- Orchestrated using Kubernetes  
- Provisioned using Infrastructure as Code (Terraform)  
- Hosted on Oracle Cloud Infrastructure (OCI)  



##  Objectives

- Build and deploy a production-ready web application  
- Automate build and deployment processes  
- Implement scalable container orchestration  
- Manage infrastructure using code (IaC)  
- Simulate real-world DevOps workflows  



##  Architecture

Developer → GitHub → CI/CD Pipeline → Docker Image → Kubernetes Cluster → Oracle Cloud Deployment  



##  Tech Stack

##  Application Layer
- React / Django (Portfolio App)
- HTML / CSS / JavaScript


##  Containerization
- Docker


##  Orchestration
- Kubernetes


## CI/CD
- GitHub Actions


## Cloud
- Oracle Cloud Infrastructure (OCI)


##  Infrastructure as Code
- Terraform


##  DevOps Tools
- Linux
- Git / GitHub



##  Features

- Fully containerized application  
- Automated build and deployment pipeline  
- Kubernetes-managed scalable deployment  
- Infrastructure provisioning using Terraform  
- Cloud-hosted production deployment  
- Zero manual deployment after setup  



##  CI/CD Pipeline

The workflow automatically:

1. Builds the application  
2. Creates Docker image  
3. Pushes image to registry  
4. Deploys to Kubernetes cluster  

Triggered on every push to the main branch.



## Kubernetes Setup

- Deployment object for application scaling  
- Service exposure for external access  
- Auto-healing and restart policies  
- Horizontal scaling support  



##  Infrastructure (Terraform)

Terraform is used to provision:

- Compute instances (Oracle Cloud VM)  
- Networking setup  
- Optional Kubernetes cluster infrastructure  



##  Docker Setup

### Build Image
```bash
docker build -t portfolio-app .


## Run Container

```bash
docker run -p 3000:3000 portfolio-app
```

---

##  Deployment Flow

1. Code pushed to GitHub
2. CI/CD pipeline triggers
3. Docker image built and pushed
4. Kubernetes pulls image and deploys
5. App is live on Oracle Cloud



##  Key Learning Outcomes

* Real-world CI/CD implementation
* Kubernetes deployment and scaling
* Infrastructure as Code with Terraform
* Cloud deployment on Oracle Cloud
* End-to-end DevOps workflow



##  Author

Innocent Kiwoly
Software & DevOps Engineer
Kubernetes • Docker • CI/CD • Terraform • Cloud



##  Status

In progress (actively improving DevOps skills)



## Future Improvements

* Monitoring with Prometheus + Grafana
* HTTPS with Nginx Ingress
* Logging system (ELK stack)
* Multi-environment deployment (dev/staging/prod)




