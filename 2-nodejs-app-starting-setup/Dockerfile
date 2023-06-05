# Create image base on 'node' image (latest version), pulling it from hub.docker
FROM node

# Change working dir to '/app'(create '/app' and go inside it), which means that all further commands will be executed from '/app'
WORKDIR /app

# Copy all files/folders from '.' path (root, where Dockerfile exists) to '.' path (root) in container
# COPY . .
# if WORKDIR set up we can use either 'COPY . .' or 'COPY . ./' or 'COPY . /app'
COPY . /app

# Run command
RUN npm install

# Let docker know that when container starts we want to expose port 80 to local machine, which runs this contaier
# It just clarifes port, but actually does nothing
EXPOSE 80

# It starts app during image creation/building, but it's inncorrect because image is just template. Do not do it!
# RUN node server.js

# It runs command only during start of container
CMD ["node", "server.js"]