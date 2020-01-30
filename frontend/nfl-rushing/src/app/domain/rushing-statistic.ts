export class RushingStatistic {
  longestRush: string = '';
  player: string = '';
  position: string = '';
  rushingAttempts: number = 0;
  rushingAttemptsPerGameAverage: number = 0;
  rushingFirstDownPercentage: number = 0;
  rushingFirstDowns: number = 0;
  rushingFortyYardsEach: number = 0;
  rushingFumbles: number = 0;
  rushingTwentyYardsEach: number = 0;
  rushingYardsAveragePerAttempt: number = 0;
  team: string = '';
  totalRushingTouchdowns: number = 0;
  totalRushingYards: number = 0;
  yardsPerGame: number = 0;

  constructor(data: Partial<RushingStatistic> = {}) {
    Object.assign(this, data)
  }
}
