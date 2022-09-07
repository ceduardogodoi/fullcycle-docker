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