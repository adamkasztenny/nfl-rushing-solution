package graphql

import (
	"net/http"

	"github.com/adamkasztenny/nfl-rushing/service"
	"github.com/samsarahq/thunder/graphql"
	"github.com/samsarahq/thunder/graphql/introspection"
	"github.com/samsarahq/thunder/graphql/schemabuilder"
)

func Handler() http.Handler {
	schema := createSchema()
	introspection.AddIntrospectionToSchema(schema)
	return graphql.HTTPHandler(schema)
}

func createSchema() *graphql.Schema {
	schema := schemabuilder.NewSchema()
	registerRushingStatisticsQuery(schema, service.CreateRushingStatisticService())
	return schema.MustBuild()
}
