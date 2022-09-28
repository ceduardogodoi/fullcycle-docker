FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=db

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
