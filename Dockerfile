FROM node:22-alpine3.19 AS base

WORKDIR /
COPY . .

FROM base AS build
RUN npm ci
RUN npm run build

FROM base
WORKDIR /app
COPY ./package*.json ./

COPY --from=build ./dist .

RUN npm install --legacy-peer-deps --omit=dev
RUN npm i -g serve

CMD [ "serve", "-s", "-l", "8080" ]