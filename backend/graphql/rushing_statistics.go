package graphql

import (
	"context"

	"github.com/adamkasztenny/nfl-rushing/domain"
	"github.com/adamkasztenny/nfl-rushing/service"
	"github.com/samsarahq/thunder/graphql/schemabuilder"
)

type RushingStatisticsArguments struct {
	Page       int64
	NameFilter *string
}

func registerRushingStatisticsQuery(schema *schemabuilder.Schema, rushingStatisticService service.RushingStatisticServiceInterface) {
	query := schema.Query()
	query.FieldFunc("rushingStatistics", func(ctx context.Context, arguments RushingStatisticsArguments) []domain.RushingStatistic {
		if arguments.NameFilter == nil {
			return rushingStatisticService.Get(int(arguments.Page), "")
		}
		return rushingStatisticService.Get(int(arguments.Page), *arguments.NameFilter)
	})

	schema.Object("RushingStatistic", domain.RushingStatistic{})
}
