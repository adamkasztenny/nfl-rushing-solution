package cmd

import (
	"fmt"
	"os"
	"strconv"

	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:     "nfl-rushing",
	Version: "1.0.0",
	Short:   "The GraphQL API which serves up NFL rushing data",
	Run: func(cmd *cobra.Command, args []string) {
		inputFile, port := validateArgs(args)
		initializeLogger()

	},
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func validateArgs(args []string) (inputFile string, port int) {
	if len(args) < 1 {
		printUsage()
	}

	inputFile = args[0]
	port, err := strconv.Atoi(args[1])

	if err != nil {
		printUsage()
	}
	return inputFile, port
}

func printUsage() {
	fmt.Println("Usage: nfl-rushing [data JSON input file] [port]")
	os.Exit(1)
}

func initializeLogger() {
	formatter := new(log.TextFormatter)
	formatter.FullTimestamp = true
	log.SetFormatter(formatter)
}
