package logging

import (
	log "github.com/sirupsen/logrus"
)

func InitializeLogger() {
	formatter := new(log.TextFormatter)
	formatter.FullTimestamp = true
	log.SetFormatter(formatter)
}
