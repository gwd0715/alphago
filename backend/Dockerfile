FROM node:12.16.2-alpine
WORKDIR /usr/src/app/alphago/backend
COPY package*.json ./
RUN npm install
COPY ./lib .
CMD ["node","./index.js"]
