FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# Anonymous volume. It will be deleted if remove container
# VOLUME [ "/app/feedback" ]

CMD [ "npm", "start" ]