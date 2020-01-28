package cmd

import (
	"fmt"
	"os"

	"github.com/adamkasztenny/nfl-rushing/configuration"
	"github.com/adamkasztenny/nfl-rushing/logging"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:     "nfl-rushing",
	Version: "1.0.0",
	Short:   "The GraphQL API which serves up NFL rushing data",
	Run: func(cmd *cobra.Command, args []string) {
		validateArgs(args)
		logging.InitializeLogger()
		configuration.LoadConfiguration()
	},
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func validateArgs(args []string) {
	if len(args) < 1 {
		printUsage()
	}
}

func printUsage() {
	fmt.Println("Usage: nfl-rushing [TOML config file]")
	os.Exit(1)
}
