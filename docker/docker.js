hub.docker.com

What is an Image ?

Image contains all the configurations.
A cut down OS.
Application Files.

What is a Container ?

Once the image is created, we will tell the docker to create a container.
Container are like Virtual Machines.
It is an isolated environment.
In the end it is just a special kinda process.

How images work ?
When we try to build the image, the Docker Client sends the content called build context to Docker Engine.
The Docker Engine then reads the Dockerfile and executes the command and creates an Image.

What should we do once Dockerfile is written for application ?
We should create a User.
As because by default docker runs as a root user which will create a potential threat.
So we need to create an user and makes that user active.

DockerFile Commands

FROM - represent the base image and from that base image we can use the directories.
WORKDIR - for specifying the working directory.
COPY, ADD - Copy files and directories.
    COPY - generally COPY is used.
    ADD - same as COPY but we can get file from URL also we can use Zip file as well.
RUN - Run OS commands and Linux commands.
ENV - Environment Variables.
EXPOSE - to run Docker in the mentioned port.
USER - that should mention the user to run the application.
CMD, ENTRYPOINT


>>docker login
>>docker push {imagename}
>>docker image save -o {filename with extension} {image name with version}
>>docker image load -i {tar file name}

Docker image command

>>docker build -t (image name) (directory where "Dockerfile" is present)
>>docker build -t {image name}:{tag version/name} {directory where "Dockerfile" is present}
>>docker image ls
>>docker image ls -q //shows only the image id
>>docker run -it (image name)
>>docker run -it (image name) sh
>>docker run -it (image name) bash
>>docker run -d --name {container name} {image name}
>>docker image rm -f $(docker image ls -q)

>>docker container prune //remove tangling container
>>docker image prune // remove tangling images
>>docker image rm {image id} //remove images
>>docker image remove {image name:tag name}
>>docker image tag imagename:tag imagename:NEWTAGNAME

docker container commands

>>docker logs {container id}
>>docker exec -it {container name} sh
>>docker stop {container name}
>>docker start {container name}
>>docker container rm {container name} || docker rm {container name}
>>docker container ls
>>docker container ls -q
>>docker container rm -f $(docker container ls -aq)
>>docker ps -a //lists all container
//difference between exec and run is that run is for new container and exec if for run time command execution

>>docker cp {container id:container DIRECTORY} {host location} //copy files from container to host
>>docker cp {host location} {container id:container DIRECTORY} //copy files from host to container
>>docker run -d -p 4000:3000 -v ${pwd}:/app {image name} //for hotreload

docker volumes

docker volume create {volumne name}
docker volumn inspect {volume name}

docker compose

docker-compose up //provided docker-compose.yml should be present
docker-compose build
docker-compose ps
docker-compose down
docker network ls
docker-compose logs

docker networking
-----------------------

Docker has an inbuilt DNS server. and each container has DNS resolver.
So that if there is a request from one container then DNS resolver will reach out the DNS server and finds the appropriate container.

Docker File

FROM {OS or Run time Env}
WORKDIR  - image's current working directory
COPY [to be copied] [where it should be copied] - to copy the contents into images.
RUN (command to run the application)
ENV - Environmental variables like default API path etc..
EXPOSE - To tell the container that this will be port to be mapped.
  The expose mentioned here is not the actual port but just the documentation with which we can map it to the actual port of the host.
USER - mention the user so that docker files will be safe as root user has full authority.
CMD - Run time instructions will be executed by CMD where as "RUN" will do build time instructions.

FROM node:14.16.1-alpine
WORKDIR /app
COPY . .
RUN npm install
ENV API_URL=http://getapi.com
EXPOSE 3000
RUN addgroup app && adduser -S -G app app // before setting the user, need to create a user and user group
USER app

.dockerignore - files to be ignored when docker build happens


DEPLOYMENT OPTIONS

single-host deployment
cluster deployment

  Cluster Options :
    Docker Swarm
    Kubernetes
  
Virtual Private Server (VPS)
Docker Machine
  docker-machine --version
//Docker machine will handshake with the Docker Engine that is in the cloud(remote)

