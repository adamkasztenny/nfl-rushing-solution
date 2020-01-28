package logging

import (
	"testing"

	log "github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
)

type loggerSuite struct {
	suite.Suite
}

func (suite *loggerSuite) SetupTest() {
	InitializeLogger()
}

func (suite *loggerSuite) TestLoggerInitialization() {
	assert.Equal(suite.T(), log.InfoLevel, log.GetLevel())
}

func TestLoggerSuite(t *testing.T) {
	suite.Run(t, new(loggerSuite))
}
