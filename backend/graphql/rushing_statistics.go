package graphql

import (
	"context"

	"github.com/adamkasztenny/nfl-rushing/domain"
	"github.com/adamkasztenny/nfl-rushing/service"
	"github.com/samsarahq/thunder/graphql/schemabuilder"
)

type RushingStatisticsArguments struct {
	Page int64
}

func registerRushingStatisticsQuery(schema *schemabuilder.Schema, rushingStatisticService service.RushingStatisticServiceInterface) {
	query := schema.Query()
	query.FieldFunc("rushingStatistics", func(ctx context.Context, arguments RushingStatisticsArguments) []domain.RushingStatistic {
		return rushingStatisticService.Get(int(arguments.Page))
	})

	schema.Object("RushingStatistic", domain.RushingStatistic{})
}
