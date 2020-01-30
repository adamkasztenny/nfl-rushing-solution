install:
	npm install

start_development: install
	ng serve --proxy-config proxy.conf.json

build:
	docker build --no-cache -t nfl-rushing-frontend .

test: install
	ng test --watch=false

lint: install
	ng lint

ci: build test


