FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Set some default arguments
ARG DEFAULT_PORT=80

# Set environmental variable and default value
ENV PORT $DEFAULT_PORT

# Use environmental variable PORT
EXPOSE $PORT

# Anonymous volume. It will be deleted if remove container
# VOLUME [ "/app/feedback" ]

CMD [ "npm", "start" ]