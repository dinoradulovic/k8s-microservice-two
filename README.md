# k8s-microservice-two

This repo is part of the bundle. 

| PARAM | NOTES |
| ------ | ------ |
| [k8s-create-eks-fargate](https://github.com/dinoradulovic/k8s-create-eks-fargate) | scripts to create Kubernetes cluster on EKS with Fargate |
| [k8s-create-flux-cd](https://github.com/dinoradulovic/k8s-create-flux-cd) | scripts to setup GitOps with FluxCD |
| [k8s-microservice-one](https://github.com/dinoradulovic/k8s-microservice-one) | first sample microservice to be deployed into cluster |
| **[k8s-microservice-two](https://github.com/dinoradulovic/k8s-microservice-two)** | **second sample microservice to be deployed into cluster** |
| [k8s-microservices-app-infra](https://github.com/dinoradulovic/k8s-microservices-app-infra) | infrastructure manifest files for two microservices app |

# Requirements
- Node Version >= v14.2.0
- Kubectl Version >= v1.23
- Kubernetes Version >= v1.22

# Usage

Run the app with `npm start` command.

It works together with [k8s-microservice-one](https://github.com/dinoradulovic/k8s-microservice-one).

Two endpoints are created to demonstrate the interaction between these two mircoservices.

After both apps are running, access the endpoints: 

***k8s-microservice-one*** ```/microservice-one``` 

First microservice access the data from the second microservice. It combines it with it's own data and then returns that as a response.

***k8s-microservice-two*** ```/microservice-two``` 

Data accessed by the first microservice, can be accessed independently in the second microservice.

### Running the app on a local cluster

Make sure Minikube(or Kind) is running in the background.

Switch to **k8s-microservices-app-infra** directory and run: 

```
kubectl apply -k deploy/overlay/staging && kubectl apply -k deploy/overlay/production
```  

This will deploy microservices into cluster under production and staging namespaces. 

They can be accessed by running:

Microservice one: 

`minikube service microservice-one-service-name-staging --url -n staging` and 

`minikube service microservice-one-service-name-staging --url -n production`

Microservice two: 

`minikube service microservice-one-service-name-staging --url -n staging` and 

`minikube service microservice-one-service-name-staging --url -n production`

