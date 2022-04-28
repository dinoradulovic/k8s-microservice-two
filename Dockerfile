
FROM node:14.2.0
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD node index.js