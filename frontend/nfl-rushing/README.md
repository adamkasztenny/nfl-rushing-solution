# Rushing - Frontend

The frontend is written in TypeScript and is an Angular 8 app.

## Running with Docker (with NGINX)
Run `make start` from the root (with docker-compose), then navigate to [localhost:8080](http://localhost:8080).

## Running the Development server (without NGINX, using the Angular dev server)
You will need [NodeJS 12](https://nodejs.org/en/download/package-manager/) and the [Angular CLI](https://cli.angular.io/) installed locally to run this in dev mode.
Run `make start_development`, then navigate to [localhost:4200](http://localhost:4200). Make sure the backend is running on [localhost:8080](http://localhost:8080).

## Build
Run `make build`.

## Running tests
Run `make test`.

## Running the linter
Run `make lint`.
