build:
	sudo docker build -t nfl-rushing .

test:
	go test -timeout 300ms -v -coverprofile coverage.out ./...
	go tool cover -html=coverage.out

start: build
	sudo docker run nfl-rushing

lint:
	go vet

ci: lint build test
