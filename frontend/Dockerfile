FROM node:12.13.1-alpine3.9 as builder
RUN mkdir /frontend
WORKDIR /frontend
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build


FROM alpine:3.9
WORKDIR /frontend
COPY --from=builder /frontend/dist /frontend/dist
CMD echo "Container is started!" && tail -f /dev/null
# CMD ls dist