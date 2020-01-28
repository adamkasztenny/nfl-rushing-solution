FROM golang:1.13.4-alpine3.10

WORKDIR /go/src/nfl-rushing
COPY . .

RUN go build

WORKDIR /opt
RUN mv /go/src/nfl-rushing/nfl-rushing .

RUN mv /go/src/nfl-rushing/config.toml .
RUN mv /go/src/nfl-rushing/rushing-statistics.json .

RUN rm -rf /go/src/nfl-rushing

EXPOSE 8080
ENTRYPOINT ["/opt/nfl-rushing"]
