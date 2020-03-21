# => Build Container
FROM node:12.16.0-alpine3.11 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY src /app/src
COPY public /app/public
RUN npm run build

# => Run Container
FROM nginx:1.17.8-alpine

# Nginx Config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Static build
COPY --from=build /app/build /usr/share/nginx/html

# Default port exposure
EXPOSE 80

# Initialize environment variables into filesystem
# WORKDIR /usr/share/nginx/html
# COPY ./env.sh .
# COPY .env .

# # Add bash
# RUN apk add --no-cache bash

# # Run script which initializes env vars to fs
# RUN chmod +x env.sh

# ENV REACT_APP_ONB_API_SERVER_URL http://onboarding-api.nov.altimetrik.io

# Start Nginx server
ENTRYPOINT ["nginx", "-g", "daemon off;"]