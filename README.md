# node-docker-server

# Build the image

Run the following command to build the Docker image. 

```
docker build -t nongaap/node-docker-server .
```

# Run the image

```
docker run -p 49160:8080 -d nongaap/node-docker-server
```

Using -d runs the container in detached mode which leaves the container running in the background. The -p flag redirects a public port to a private port inside the container.

Visit http://localhost:49160
