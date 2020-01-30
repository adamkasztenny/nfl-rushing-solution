package persistence

import (
	"encoding/json"
	"io/ioutil"
	"strings"
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

func (repository *RushingStatisticRepository) Get(limit, offset int, nameFilter string) []domain.RushingStatistic {
	repository.initializeRushingStatisticsCache()
	if nameFilter != "" {
		filteredRushingStatistics := repository.filteredRushingStatistics(nameFilter)
		return repository.getPaginatedSubset(filteredRushingStatistics, limit, offset)
	}
	return repository.getPaginatedSubset(repository.rushingStatistics, limit, offset)
}

func (repository *RushingStatisticRepository) getPaginatedSubset(rushingStatistics []domain.RushingStatistic, limit, offset int) []domain.RushingStatistic {
	totalSize := len(rushingStatistics)

	startingIndex := offset * limit
	if totalSize == 0 || startingIndex >= totalSize {
		return []domain.RushingStatistic{}
	}

	endingIndex := startingIndex + limit
	if endingIndex >= totalSize {
		return rushingStatistics[startingIndex:]
	}

	return rushingStatistics[startingIndex:endingIndex]
}

func (repository *RushingStatisticRepository) filteredRushingStatistics(nameFilter string) []domain.RushingStatistic {
	var filteredRushingStatistics []domain.RushingStatistic
	for _, rushingStatistic := range repository.rushingStatistics {
		if repository.filterMatches(nameFilter, rushingStatistic) {
			filteredRushingStatistics = append(filteredRushingStatistics, rushingStatistic)
		}
	}
	return filteredRushingStatistics
}

func (repository *RushingStatisticRepository) filterMatches(nameFilter string, rushingStatistic domain.RushingStatistic) bool {
	lowercaseName := strings.TrimSpace(strings.ToLower(rushingStatistic.Player))
	lowercaseNameFilter := strings.TrimSpace(strings.ToLower(nameFilter))
	return strings.Contains(lowercaseName, lowercaseNameFilter)
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
