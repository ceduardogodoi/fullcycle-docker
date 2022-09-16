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
