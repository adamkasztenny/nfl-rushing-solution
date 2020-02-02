export class RushingStatistic {
  player = '';
  team = '';
  position = '';
  rushingAttempts = 0;
  rushingAttemptsPerGameAverage = 0;
  rushingFirstDownPercentage = 0;
  rushingFirstDowns = 0;
  rushingFortyYardsEach = 0;
  rushingFumbles = 0;
  rushingTwentyYardsEach = 0;
  rushingYardsAveragePerAttempt = 0;
  totalRushingTouchdowns = 0;
  longestRush = '';
  totalRushingYards = 0;
  yardsPerGame = 0;

  constructor(data: Partial<RushingStatistic> = {}) {
    Object.assign(this, data);
  }
}
