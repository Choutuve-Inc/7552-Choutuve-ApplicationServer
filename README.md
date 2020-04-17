# Choutuve ApplicationServer

Choutuve, like YouTube, but with~~out~~ quality (App Server)

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

## Remove docker image
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
