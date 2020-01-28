package configuration

import (
	"testing"

	"github.com/spf13/viper"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
)

type configurationSuite struct {
	suite.Suite
}

func (suite *configurationSuite) SetupTest() {
	LoadConfiguration()
}

func (suite *configurationSuite) TestIntegerConfigurationValue() {
	assert.Equal(suite.T(), 42, viper.GetInt("TEST_INT"))
}

func (suite *configurationSuite) TestStringConfigurationValue() {
	assert.Equal(suite.T(), "string", viper.GetString("TEST_STRING"))
}

func TestConfigurationSuite(t *testing.T) {
	suite.Run(t, new(configurationSuite))
}
