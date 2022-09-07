FROM nginx:latest

WORKDIR /app
RUN apt-get update && \
  apt-install vim -y

COPY . /usr/share/nginx