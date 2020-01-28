package service

import (
	"testing"

	"github.com/adamkasztenny/nfl-rushing/configuration"
	"github.com/adamkasztenny/nfl-rushing/domain"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
)

type rushingStatisticsServiceSuite struct {
	suite.Suite
}

func (suite *rushingStatisticsServiceSuite) SetupTest() {
	configuration.LoadConfiguration()
}

func (suite *rushingStatisticsServiceSuite) TestInitialization() {
	service := CreateRushingStatisticService().(*RushingStatisticService)

	assert.Equal(suite.T(), 5, service.pageSize)
	assert.NotZero(suite.T(), service.repository)
}

func (suite *rushingStatisticsServiceSuite) TestReturnsPaginatedResultStartingFromPageOne() {
	service := CreateRushingStatisticService()

	page := service.Get(1)
	suite.checkExpectedPageSize(page)

	page = service.Get(2)
	suite.checkExpectedPageSize(page)

	page = service.Get(3)
	suite.checkExpectedPageSize(page)

	page = service.Get(4)
	suite.checkExpectedPageSize(page)
}

func (suite *rushingStatisticsServiceSuite) checkExpectedPageSize(page []domain.RushingStatistic) {
	assert.True(suite.T(), len(page) == 5)
}

func TestRushingStatisticsServiceSuite(t *testing.T) {
	suite.Run(t, new(rushingStatisticsServiceSuite))
}
