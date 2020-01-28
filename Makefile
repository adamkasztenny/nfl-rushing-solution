build:
	cd ./frontend/nfl-rushing && $(MAKE) build
	cd ./backend && $(MAKE) build

start: build
	docker-compose up -d 
	
test:
	cd ./frontend/nfl-rushing && $(MAKE) test
	cd ./backend && $(MAKE) test

ci: test build

