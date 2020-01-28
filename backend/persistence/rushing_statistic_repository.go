package persistence

import (
	"encoding/json"
	"io/ioutil"
	"sync"

	"github.com/adamkasztenny/nfl-rushing/domain"

	log "github.com/sirupsen/logrus"
)

type RushingStatisticRepository struct {
	rushingStatistics []domain.RushingStatistic
	filename          string
	once              *sync.Once
}

func CreateRushingStatisticRepository(filename string) RushingStatisticRepository {
	repository := RushingStatisticRepository{}
	repository.filename = filename
	repository.once = &sync.Once{}
	return repository
}

func (repository *RushingStatisticRepository) Get(limit, offset int) []domain.RushingStatistic {
	repository.initializeRushingStatisticsCache()
	return repository.getPaginatedSubset(limit, offset)
}

func (repository *RushingStatisticRepository) getPaginatedSubset(limit, offset int) []domain.RushingStatistic {
	startingIndex := offset * limit
	endingIndex := startingIndex + limit
	if endingIndex >= len(repository.rushingStatistics) {
		return repository.rushingStatistics[startingIndex:]
	}

	return repository.rushingStatistics[startingIndex:endingIndex]
}

func (repository *RushingStatisticRepository) initializeRushingStatisticsCache() {
	repository.once.Do(func() {
		dataAsJSON, err := ioutil.ReadFile(repository.filename)
		if err != nil {
			log.Errorf("Cannot read rushing statistics file %v: %v", repository.filename, err)
			return
		}

		repository.deserializeJSON(dataAsJSON)
	})
}

func (repository *RushingStatisticRepository) deserializeJSON(dataAsJSON []byte) {
	var rushingStatistics []domain.RushingStatistic
	err := json.Unmarshal(dataAsJSON, &rushingStatistics)
	if err != nil {
		log.Errorf("Cannot initialize rushing statistics cache: %v", err)
	}

	repository.rushingStatistics = rushingStatistics
}
