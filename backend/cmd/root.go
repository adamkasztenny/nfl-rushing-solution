package cmd

import (
	"fmt"
	"net/http"
	"os"

	"github.com/adamkasztenny/nfl-rushing/configuration"
	"github.com/adamkasztenny/nfl-rushing/graphql"
	"github.com/adamkasztenny/nfl-rushing/logging"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var rootCmd = &cobra.Command{
	Use:     "nfl-rushing",
	Version: "1.0.0",
	Short:   "The GraphQL API which serves up NFL rushing data",
	Run: func(cmd *cobra.Command, args []string) {
		logging.InitializeLogger()
		configuration.LoadConfiguration()
		serveHTTP()
	},
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func serveHTTP() {
	handler := graphql.Handler()
	http.Handle("/graphql", handler)
	http.Handle("/graphql/", handler)

	port := viper.GetString("PORT")
	log.Infof("Going to listen on port %v", port)

	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
