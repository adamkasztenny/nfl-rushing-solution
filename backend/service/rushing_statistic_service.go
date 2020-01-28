package service

import (
	"github.com/adamkasztenny/nfl-rushing/domain"
	"github.com/adamkasztenny/nfl-rushing/persistence"
	"github.com/spf13/viper"
)

type RushingStatisticServiceInterface interface {
	Get(pageNumber int) []domain.RushingStatistic
}

type RushingStatisticService struct {
	pageSize   int
	repository persistence.RushingStatisticRepository
}

func CreateRushingStatisticService() RushingStatisticServiceInterface {
	filename := viper.GetString("RUSHING_STATISTICS_FILENAME")
	pageSize := viper.GetInt("PAGE_SIZE")
	repository := persistence.CreateRushingStatisticRepository(filename)
	return &RushingStatisticService{pageSize: pageSize, repository: repository}
}

func (service *RushingStatisticService) Get(pageNumber int) []domain.RushingStatistic {
	return service.repository.Get(service.pageSize, pageNumber-1)
}
