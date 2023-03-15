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

Docker image command

>>docker build -t (image name) (directory where "Dockerfile" is present)
>>docker image ls
>>docker run -it (image name)
>>docker run -it (image name) sh
>>docker run -it (image name) bash

Docker File

FROM {OS or Run time Env}
WORKDIR  - image's current working directory
COPY [to be copied] [where it should be copied] - to copy the contents into images.
RUN (command to run the application)
ENV - Environmental variables like default API path etc..
EXPOSE - To tell the container that this will be port to be mapped.
  The expose mentioned here is not the actual port but just the documentation with which we can map it to the actual port of the host.

FROM node:14.16.1-alpine
WORKDIR /app
COPY . .
RUN npm install
ENV API_URL=http://getapi.com
EXPOSE 3000

.dockerignore - files to be ignored when docker build happens


