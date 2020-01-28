package domain

type RushingStatistic struct {
	Player                        string  `json:"Player"`
	Team                          string  `json:"Team"`
	Position                      string  `json:"Pos"`
	RushingAttempts               int     `json:"Att"`
	RushingAttemptsPerGameAverage float64 `json:"Att/G"`
	TotalRushingYards             int     `json:"Yds"`
	RushingYardsAveragePerAttempt float64 `json:"Avg"`
	YardsPerGame                  float64 `json:"Yds/G"`
	TotalRushingTouchdowns        int     `json:"TD"`
	LongestRush                   string  `json:"Lng"`
	RushingFirstDowns             int     `json:"1st"`
	RushingFirstDownPercentage    float64 `json:"1st%"`
	RushingTwentyYardsEach        int     `json:"20+"`
	RushingFortyYardsEach         int     `json:"40+"`
	RushingFumbles                int     `json:"FUM"`
}
