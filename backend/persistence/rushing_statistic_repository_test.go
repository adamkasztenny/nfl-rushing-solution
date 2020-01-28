package persistence

import (
	"testing"

	"github.com/adamkasztenny/nfl-rushing/domain"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
)

type rushingStatisticsRepositorySuite struct {
	suite.Suite
	filename                  string
	expectedRushingStatistics []domain.RushingStatistic
}

func (suite *rushingStatisticsRepositorySuite) SetupTest() {
	suite.filename = "test-rushing-statistics.json"
	suite.setupExpectedRushingStatistics()
}

func (suite *rushingStatisticsRepositorySuite) TestInitialization() {
	repository := CreateRushingStatisticRepository("test-empty-rushing-statistics.json")

	assert.NotEmpty(suite.T(), repository.filename)
	assert.NotNil(suite.T(), repository.once)
}

func (suite *rushingStatisticsRepositorySuite) TestReturnsEmptyRushingStatisticsIfThereAreNone() {
	repository := CreateRushingStatisticRepository("test-empty-rushing-statistics.json")

	rushingStatistics := repository.Get(1, 0)

	assert.Empty(suite.T(), rushingStatistics)
}

func (suite *rushingStatisticsRepositorySuite) TestReturnsASingleRushingStatistic() {
	repository := CreateRushingStatisticRepository(suite.filename)

	rushingStatistics := repository.Get(1, 0)

	assert.True(suite.T(), len(rushingStatistics) == 1)
	expectedRushingStatistic := suite.expectedRushingStatistics[0]
	assert.Equal(suite.T(), expectedRushingStatistic, rushingStatistics[0])
}

func (suite *rushingStatisticsRepositorySuite) TestReturnsPaginatedRushingStatistics() {
	repository := CreateRushingStatisticRepository(suite.filename)

	firstPage := repository.Get(2, 0)
	lastPage := repository.Get(2, 1)

	assert.True(suite.T(), len(firstPage) == 2)
	assert.ElementsMatch(suite.T(), suite.expectedRushingStatistics[0:2], firstPage)

	assert.True(suite.T(), len(lastPage) == 1)
	assert.Equal(suite.T(), suite.expectedRushingStatistics[2], lastPage[0])
}

func (suite *rushingStatisticsRepositorySuite) TestReturnsAllRushingStatisticsIfNotPaginatedProperly() {
	repository := CreateRushingStatisticRepository(suite.filename)

	rushingStatistics := repository.Get(3, 0)

	assert.True(suite.T(), len(rushingStatistics) == 3)
	assert.ElementsMatch(suite.T(), suite.expectedRushingStatistics, rushingStatistics)
}

func (suite *rushingStatisticsRepositorySuite) TestCachesRushingStatistics() {
	repository := CreateRushingStatisticRepository(suite.filename)

	rushingStatistics := repository.Get(3, 0)
	assert.True(suite.T(), len(rushingStatistics) == 3)

	repository.filename = "non-existent-file.json"
	rushingStatistics = repository.Get(3, 0)
	assert.True(suite.T(), len(rushingStatistics) == 3)
}

func (suite *rushingStatisticsRepositorySuite) TestReturnsEmptyRushingStatisticsIfTheFileDoesNotExist() {
	repository := CreateRushingStatisticRepository("non-existent-file.json")

	rushingStatistics := repository.Get(1, 0)

	assert.Empty(suite.T(), rushingStatistics)
}

func (suite *rushingStatisticsRepositorySuite) TestReturnsEmptyRushingStatisticsIfTheFileDoesNotContainValidJSON() {
	repository := CreateRushingStatisticRepository("test-empty-file.json")

	rushingStatistics := repository.Get(1, 0)

	assert.Empty(suite.T(), rushingStatistics)
}

func TestRushingStatisticsRepositorySuite(t *testing.T) {
	suite.Run(t, new(rushingStatisticsRepositorySuite))
}

func (suite *rushingStatisticsRepositorySuite) setupExpectedRushingStatistics() {
	suite.expectedRushingStatistics = []domain.RushingStatistic{
		{
			Player:                        "Joe Banyard",
			Team:                          "JAX",
			Position:                      "RB",
			RushingAttempts:               2,
			RushingAttemptsPerGameAverage: 2,
			TotalRushingYards:             7,
			RushingYardsAveragePerAttempt: 3.5,
			YardsPerGame:                  7,
			TotalRushingTouchdowns:        0,
			LongestRush:                   "7",
			RushingFirstDowns:             0,
			RushingFirstDownPercentage:    0,
			RushingTwentyYardsEach:        0,
			RushingFortyYardsEach:         0,
			RushingFumbles:                0,
		},
		{
			Player:                        "Breshad Perriman",
			Team:                          "BAL",
			Position:                      "WR",
			RushingAttempts:               1,
			RushingAttemptsPerGameAverage: 0.1,
			TotalRushingYards:             2,
			RushingYardsAveragePerAttempt: 2,
			YardsPerGame:                  0.1,
			TotalRushingTouchdowns:        0,
			LongestRush:                   "2",
			RushingFirstDowns:             0,
			RushingFirstDownPercentage:    0,
			RushingTwentyYardsEach:        0,
			RushingFortyYardsEach:         0,
			RushingFumbles:                0,
		},
		{
			Player:                        "Tyreek Hill",
			Team:                          "KC",
			Position:                      "WR",
			RushingAttempts:               24,
			RushingAttemptsPerGameAverage: 1.5,
			TotalRushingYards:             267,
			RushingYardsAveragePerAttempt: 11.1,
			YardsPerGame:                  16.7,
			TotalRushingTouchdowns:        3,
			LongestRush:                   "70T",
			RushingFirstDowns:             10,
			RushingFirstDownPercentage:    41.7,
			RushingTwentyYardsEach:        4,
			RushingFortyYardsEach:         2,
			RushingFumbles:                0,
		},
	}
}
