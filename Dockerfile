# syntax=docker/dockerfile:1

FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

ARG REACT_APP_BASE_URL
ARG REACT_APP_NODE_ENV
ARG REACT_APP_PROJECT
ARG REACT_APP_AUTH_PREFIX
ARG REACT_APP_AUTH_API_PATH
ARG REACT_APP_WIZARD_PREFIX
ARG REACT_APP_WIZARD_API_PATH
ARG REACT_APP_RECAPTCHA_KEY=""

RUN ( [ "$REACT_APP_BASE_URL" ] && [ "$REACT_APP_NODE_ENV" ] && [ "$REACT_APP_PROJECT" ] && [ "$REACT_APP_AUTH_PREFIX" ] \
    && [ "$REACT_APP_AUTH_API_PATH" ] && [ "$REACT_APP_WIZARD_PREFIX" ] && [ "$REACT_APP_WIZARD_API_PATH" ] ) \
    || ( echo "Missing arguments" && exit 1 )

RUN yarn run build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
