FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Set environmental variable and default value
ENV PORT 80

# Use environmental variable PORT
EXPOSE $PORT

# Anonymous volume. It will be deleted if remove container
# VOLUME [ "/app/feedback" ]

CMD [ "npm", "start" ]