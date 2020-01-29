build:
	docker-compose build

start:
	docker-compose up -d --force-recreate --build
	
test:
	cd ./frontend/nfl-rushing && $(MAKE) test
	cd ./backend && $(MAKE) test

ci:
	cd ./frontend/nfl-rushing && $(MAKE) ci
	cd ./backend && $(MAKE) ci
