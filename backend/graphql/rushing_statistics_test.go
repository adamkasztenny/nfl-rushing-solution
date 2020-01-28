package graphql

import (
	"context"
	"fmt"
	"testing"

	"github.com/adamkasztenny/nfl-rushing/domain"
	"github.com/brianvoe/gofakeit"
	"github.com/samsarahq/thunder/graphql"
	"github.com/samsarahq/thunder/graphql/schemabuilder"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/suite"
)

type rushingStatisticsSuite struct {
	suite.Suite
	service *mockRushingStatisticsService
}

type mockRushingStatisticsService struct {
	mock.Mock
	rushingStatistics []domain.RushingStatistic
}

func (service *mockRushingStatisticsService) Get(page int) []domain.RushingStatistic {
	service.Called(page)
	return service.rushingStatistics
}

func (suite *rushingStatisticsSuite) SetupTest() {
	gofakeit.Seed(0)

	suite.service = new(mockRushingStatisticsService)
	suite.service.rushingStatistics = suite.createFakeRushingStatistics()
}

func (suite *rushingStatisticsSuite) TestReturnsRushingStatisticsForTheRightPage() {
	expectedPage := gofakeit.Number(1, 100)
	suite.service.On("Get", expectedPage).Return(suite.service.rushingStatistics)

	suite.createQuery(expectedPage)

	suite.service.AssertExpectations(suite.T())
}

func (suite *rushingStatisticsSuite) TestReturnsRushingStatistics() {
	expectedPage := gofakeit.Number(1, 100)
	suite.service.On("Get", expectedPage).Return(suite.service.rushingStatistics)

	result := suite.createQuery(expectedPage)

	expectedResult := suite.createExpectedResult(suite.service.rushingStatistics[0])
	resultData := result["rushingStatistics"].([]interface{})[0]
	assert.Equal(suite.T(), expectedResult, resultData)
}

func (suite *rushingStatisticsSuite) createExpectedResult(rushingStatistic domain.RushingStatistic) map[string]interface{} {
	return map[string]interface{}{
		"longestRush":                   rushingStatistic.LongestRush,
		"player":                        rushingStatistic.Player,
		"position":                      rushingStatistic.Position,
		"rushingAttempts":               rushingStatistic.RushingAttempts,
		"rushingAttemptsPerGameAverage": rushingStatistic.RushingAttemptsPerGameAverage,
		"rushingFirstDownPercentage":    rushingStatistic.RushingFirstDownPercentage,
		"rushingFirstDowns":             rushingStatistic.RushingFirstDowns,
		"rushingFortyYardsEach":         rushingStatistic.RushingFortyYardsEach,
		"rushingFumbles":                rushingStatistic.RushingFumbles,
		"rushingTwentyYardsEach":        rushingStatistic.RushingTwentyYardsEach,
		"rushingYardsAveragePerAttempt": rushingStatistic.RushingYardsAveragePerAttempt,
		"team":                          rushingStatistic.Team,
		"totalRushingTouchdowns":        rushingStatistic.TotalRushingTouchdowns,
		"totalRushingYards":             rushingStatistic.TotalRushingYards,
		"yardsPerGame":                  rushingStatistic.YardsPerGame,
	}
}

func (suite *rushingStatisticsSuite) createQuery(page int) map[string]interface{} {
	rawQuery := fmt.Sprintf(`
		query {
		  rushingStatistics(page: %v) {
		    longestRush
		    player
		    position
		    rushingAttempts
		    rushingAttemptsPerGameAverage
		    rushingFirstDownPercentage
		    rushingFirstDowns
		    rushingFortyYardsEach
		    rushingFumbles
		    rushingTwentyYardsEach
		    rushingYardsAveragePerAttempt
		    team
		    totalRushingTouchdowns
		    totalRushingYards
		    yardsPerGame
		 }
	       }`, page)

	parsedQuery := graphql.MustParse(rawQuery, nil)
	err := graphql.PrepareQuery(suite.createTestSchema().Query, parsedQuery.SelectionSet)
	assert.Nil(suite.T(), err)

	executor := &graphql.Executor{}
	result, err := executor.Execute(context.Background(), suite.createTestSchema().Query, nil, parsedQuery)

	assert.NotEmpty(suite.T(), result)
	assert.Nil(suite.T(), err)

	return result.(map[string]interface{})
}

func (suite *rushingStatisticsSuite) createFakeRushingStatistics() []domain.RushingStatistic {
	var rushingStatistic domain.RushingStatistic
	gofakeit.Struct(&rushingStatistic)
	return []domain.RushingStatistic{rushingStatistic}
}

func (suite *rushingStatisticsSuite) createTestSchema() *graphql.Schema {
	schema := schemabuilder.NewSchema()
	registerRushingStatisticsQuery(schema, suite.service)
	return schema.MustBuild()
}

func TestRushingStatisticsSuite(t *testing.T) {
	suite.Run(t, new(rushingStatisticsSuite))
}
