# express-environment-demo

This project was created with expressjs

## Installation

1; Install dependencies using npm

```shell
npm install
```

2; Run project for development

```shell
npm run start
```

## Build Docker Image

1; Build Docker Image with Tag

```shell
docker build -t rizkypanz/express-environment-demo:v1.0.0 .
```

## Run Docker Container

1; Run Docker with Environment

```shell
docker run -itd --name nginx-environment-demo -e APP_NODE_ENV="staging" -e APP_VERSION="v1.0.0" -e APP_PORT=80 -p 80:80 rizkypanz/express-environment-demo:v1.0.0
```
