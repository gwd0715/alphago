# FROM node:12.16.2-alpine as builder
# WORKDIR /usr/src/app/alphago/frontend

# COPY package*.json ./

# RUN npm install --silent
# RUN npm install -g react-scripts@3.4.1 --silent

# COPY . .

# RUN npm run build

FROM nginx:alpine
WORKDIR /usr/src/app/alphago/frontend
COPY build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]