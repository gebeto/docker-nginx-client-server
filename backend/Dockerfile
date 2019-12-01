FROM node:12.13.1-alpine3.9

RUN mkdir /backend
WORKDIR /backend
COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
CMD node index.js
