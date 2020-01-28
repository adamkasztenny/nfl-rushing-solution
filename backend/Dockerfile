FROM golang:1.13.4-alpine3.10

WORKDIR /go/src/nfl-rushing
COPY . .

RUN go build

WORKDIR /opt
RUN mv /go/src/nfl-rushing/nfl-rushing .
RUN rm -rf /go/src/nfl-rushing

ENTRYPOINT ["/opt/nfl-rushing"]
