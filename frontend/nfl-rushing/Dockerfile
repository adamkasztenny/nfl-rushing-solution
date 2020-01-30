FROM nginx:1.17.8-alpine

WORKDIR . /src
COPY . .

RUN apk add --update nodejs nodejs-npm
RUN node --version

RUN npm install -g @angular/cli
RUN npm install

RUN ng build --prod --aot

RUN apk del nodejs nodejs-npm

RUN mv ./dist/nfl-rushing/* /usr/share/nginx/html/
RUN mv nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /
RUN rm -rf /src

EXPOSE 8080
