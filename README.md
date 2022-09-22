# Comandos

## Criar imagem

```bash
# -t: --tag
docker build -t ceduardogodoi/nginx-com-vim:latest .
```

## Rodar imagem entrando em seu bash

```bash
docker run -it ceduardogodoi/nginx-com-vim bash
```

## ENTRYPOINT vs CMD

Arquivo Dockerfile de exemplo

```Dockerfile
FROM ubuntu:latest

ENTRYPOINT [ "echo", "Hello" ]
CMD [ "WORLD" ]
```

- CMD é um comando que pode ser substituído

```bash
docker run -it ceduardogodoi/hello echo "Oi"
```

> `echo "Oi"` substituirá o comando em CMD

- ENTRYPOINT é um comando fixo, o comando que está nele não será substituído

## Subindo imagem para o DockerHub

```bash
# caso esteja logado
docker logout

docker login

# docker push usuario/nome_da_imagem
docker push ceduardogodoi/nginx-fullcycle
```

## Tipos de Network

- **bridge**: (o mais comum) comunicação entre containers
- **host**: (2do mais comum) mescla network do docker com o host do docker
- **overlay**: comunicação entre containers em máquinas diferentes
- **macvlan**: seta macaddress num container que faz parecer que está plugado na sua rede
- **none**: nenhuma rede no container, ele roda de forma isolada

### Criando uma network e comandos relacionados

```bash
# criando uma rede
docker network create --driver bridge minharede

# criando container na rede bridge nomeada
docker run -d -it --name ubuntu1 --network minharede bash

# listar redes
docker network ls

# inspecionar redes
docker network inspect minharede

# conetar um container a uma rede
docker network connect minharede ubuntu3
```

### Acessando host docker a partir de um container

Exemplo:

```bash
curl http://host.docker.internal:8000

# testar
curl http://gateway.docker.internal:8000
```

### Exemplo: trabalhando com node sem ter node instalado

- Rodar imagem do node com volume apontando para a minha pasta local chamada `node` e no container a pasta `/usr/src/app`

```bash
mkdir node

cd node

docker run --rm -it --name node -v $(pwd)/:/usr/src/app node:15 bash
```

### Gerando uma imagem a partir de um Dockerfile.prod (como exemplo)

```bash
docker build -t ceduardogodoi/hello-express . -f Dockerfile.prod
```

### Docker Compose (docker-compose)

- Arquivo exemplo

```yaml
# docker-compose.yaml
version: "3"

services:
  laravel:
    image: ceduardogodoi/laravel:prod
    container_name: laravel
    networks:
      - laranet

  nginx:
    image: ceduardogodoi/nginx:prod
    container_name: nginx
    networks:
      - laranet
    ports:
      - "8080:80"

networks:
  laranet:
    driver: bridge
```

- Executar

```bash
# subir imagens usando o docker-compose
docker-compose up

# rodar sem travar o terminar (detached)
docker-compose up -d

# buildar novamente imagens do compose
docker-compose up -d --build
```
