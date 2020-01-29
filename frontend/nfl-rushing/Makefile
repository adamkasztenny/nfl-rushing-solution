start_development:
	ng serve --proxy-config proxy.conf.json

build:
	ng build --prod --aot
	docker build -t nfl-rushing-frontend .

start: build
	docker run -d -p 8080:80 nfl-rushing-frontend

test:
	ng test --watch=false

lint:
	ng lint

ci: build test


