package configuration

import (
	"fmt"

	"github.com/spf13/viper"
)

func LoadConfiguration() {
	viper.SetConfigName("config")
	viper.SetConfigType("toml")
	viper.AddConfigPath(".")
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("Cannot read configuration file: %s \n", err))
	}
}
