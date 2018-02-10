FROM node:9.5-alpine

RUN apk --no-cache add git \
    yarn \
    && mkdir /app

WORKDIR /app

COPY . /app

CMD sh ./boot.sh