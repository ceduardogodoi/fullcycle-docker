FROM golang:latest

COPY ./main.go /go/src/
WORKDIR /go/src/

RUN go mod init fullcycle/challenge1 && \
  go build -o .

CMD [ "./challenge1" ]