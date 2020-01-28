build:
	cd ./frontend/nfl-rushing && $(MAKE) build
	cd ./backend && $(MAKE) build

start: build
	docker-compose up -d 
