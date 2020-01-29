start_development:
	ng serve --proxy-config proxy.conf.json

build:
	npm install
	rm -rf dist
	ng build --prod --aot
	docker build --no-cache -t nfl-rushing-frontend .

test:
	ng test --watch=false

lint:
	ng lint

ci: build test


