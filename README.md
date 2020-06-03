# Choutuve ApplicationServer

[![Build Status](https://travis-ci.com/Choutuve-Inc/7552-Choutuve-ApplicationServer.svg?branch=master)](https://travis-ci.com/github/Choutuve-Inc/7552-Choutuve-ApplicationServer)

Choutuve, like YouTube, but with~~out~~ quality (App Server)

## Test the App

```bash
node server.js
```

GET localhost:3000/users

POST localhost:3000/users

```json
{
    "email": "ldesuque@choutuve.com",
    "name": "Leandro"
}
```

GET localhost:3000/users/:id

## Setup

This will generate a package-lock.json file which will be copied to the Docker image.

```bash
npm install
```

## Building Docker image

```bash
sudo docker build -t choutuve-app-server .
```

## Run Docker image

```bash
sudo docker run -p 49160:8080 -d choutuve-app-server
```

## Test Docker

```bash
curl -i localhost:49160
```

## Remove Docker image
```bash
sudo docker container ls
sudo docker rm -f <container-name>
```

Then you can run again with the changes :)
(Docker-compose maybe?)

## Test Travis

```bash
npm install jshint --save-dev
npm test
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
