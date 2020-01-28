package domain

type RushingStatistic struct {
	Player                        string  `json:"Player"`
	Team                          string  `json:"Team"`
	Position                      string  `json:"Pos"`
	RushingAttempts               int     `json:"Att"`
	RushingAttemptsPerGameAverage int     `json:"Att/G"`
	TotalRushingYards             int     `json:"Yds"`
	RushingYarsAveragePerAttempt  float64 `json:"Avg"`
	YardsPerGame                  int     `json:"Yds/G"`
	TotalRushingTouchdowns        int     `json:"TD"`
	LongestRush                   string  `json:"Lng"`
	RushingFirstDowns             int     `json:"1st"`
	RushingFirstDownPercentage    int     `json:"1st%"`
	RushingTwentyYardsEach        int     `json:"20+"`
	RushingFortyYardsEach         int     `json:"40+"`
	RushingFumbles                int     `json:"FUM"`
}
