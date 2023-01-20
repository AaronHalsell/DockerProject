// FOR LAB 2

// Building an image
docker build -t project:latest .
docker run --rm -d -p 8080:8080 project

// FOR LAB 3

// Starting the Swarm
docker swarm init
docker stack deploy -c docker-compose.yaml  project-stack

// Checking containers to get ID
docker ps

// Stopping container
docker stop <container ID>

// Checking replicas
docker stack services project-stack

// Scaling out to 7 instances/replicas
docker service scale project-stack_mywebsite=7

// Scaling in to 2 instances/replicas
docker service scale project-stack_mywebsite=2


// Removing stack
docker stack rm project-stack

// Checking to make sure all stacks were removed
docker ps -a 


