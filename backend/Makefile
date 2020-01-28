build:
	docker build -t nfl-rushing .

test:
	go test -timeout 300ms -v -coverprofile coverage.out ./...
	go tool cover -html=coverage.out

start: build
	docker run -d -p 8080:8080 nfl-rushing

lint:
	go vet

ci: lint build test
