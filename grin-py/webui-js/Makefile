CONTAINER := webui-js
REGISTRY := docker.io/grinpool

push: build

build:
	docker build --network=host $(DOCKER_BUILD_FLAGS) -t $(CONTAINER) .
	docker tag $(CONTAINER):latest $(REGISTRY)/$(CONTAINER):latest

push:
	docker push $(REGISTRY)/$(CONTAINER):latest
