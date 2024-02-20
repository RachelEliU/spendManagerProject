# getting node.js image
FROM node:20.9-alpine
# Create app directory
RUN mkdir / app
WORKDIR ./app/

COPY package*.json .
# Bundle app source

#COPY package.json ./appdocker login hadasregistry.azurecr.io
# Install app dependencies
RUN npm install 
COPY .  .
RUN npx tsc
EXPOSE 3000
ENTRYPOINT ["node" ,"dist/app.js"]

