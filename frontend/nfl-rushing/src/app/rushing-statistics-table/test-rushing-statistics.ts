import { RushingStatistic } from '../domain/rushing-statistic';

export const TEST_RUSHING_STATISTICS: RushingStatistic[] = [
  new RushingStatistic({
    player: 'Joe Banyard',
    team: 'JAX',
    position: 'RB',
    rushingAttempts: 2,
    rushingAttemptsPerGameAverage: 2,
    totalRushingYards: 7,
    rushingYardsAveragePerAttempt: 3.5,
    yardsPerGame: 7,
    totalRushingTouchdowns: 0,
    longestRush: '7',
    rushingFirstDowns: 0,
    rushingFirstDownPercentage: 0,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Shaun Hill',
    team: 'MIN',
    position: 'QB',
    rushingAttempts: 5,
    rushingAttemptsPerGameAverage: 1.7,
    totalRushingYards: 5,
    rushingYardsAveragePerAttempt: 1,
    yardsPerGame: 1.7,
    totalRushingTouchdowns: 0,
    longestRush: '9',
    rushingFirstDowns: 0,
    rushingFirstDownPercentage: 0,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Breshad Perriman',
    team: 'BAL',
    position: 'WR',
    rushingAttempts: 1,
    rushingAttemptsPerGameAverage: 0.1,
    totalRushingYards: 2,
    rushingYardsAveragePerAttempt: 2,
    yardsPerGame: 0.1,
    totalRushingTouchdowns: 0,
    longestRush: '2',
    rushingFirstDowns: 0,
    rushingFirstDownPercentage: 0,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Charlie Whitehurst',
    team: 'CLE',
    position: 'QB',
    rushingAttempts: 2,
    rushingAttemptsPerGameAverage: 2,
    totalRushingYards: 1,
    rushingYardsAveragePerAttempt: 0.5,
    yardsPerGame: 1,
    totalRushingTouchdowns: 0,
    longestRush: '2',
    rushingFirstDowns: 0,
    rushingFirstDownPercentage: 0,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Lance Dunbar',
    team: 'DAL',
    position: 'RB',
    rushingAttempts: 9,
    rushingAttemptsPerGameAverage: 0.7,
    totalRushingYards: 31,
    rushingYardsAveragePerAttempt: 3.4,
    yardsPerGame: 2.4,
    totalRushingTouchdowns: 1,
    longestRush: '10',
    rushingFirstDowns: 3,
    rushingFirstDownPercentage: 33.3,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Mark Ingram',
    team: 'NO',
    position: 'RB',
    rushingAttempts: 205,
    rushingAttemptsPerGameAverage: 12.8,
    totalRushingYards: 1043,
    rushingYardsAveragePerAttempt: 5.1,
    yardsPerGame: 65.2,
    totalRushingTouchdowns: 6,
    longestRush: '75T',
    rushingFirstDowns: 49,
    rushingFirstDownPercentage: 23.9,
    rushingTwentyYardsEach: 4,
    rushingFortyYardsEach: 2,
    rushingFumbles: 2
  }),
  new RushingStatistic({
    player: 'Reggie Bush',
    team: 'BUF',
    position: 'RB',
    rushingAttempts: 12,
    rushingAttemptsPerGameAverage: 0.9,
    totalRushingYards: -3,
    rushingYardsAveragePerAttempt: -0.3,
    yardsPerGame: -0.2,
    totalRushingTouchdowns: 1,
    longestRush: '5',
    rushingFirstDowns: 2,
    rushingFirstDownPercentage: 16.7,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 1
  }),
  new RushingStatistic({
    player: 'Lucky Whitehead',
    team: 'DAL',
    position: 'WR',
    rushingAttempts: 10,
    rushingAttemptsPerGameAverage: 0.7,
    totalRushingYards: 82,
    rushingYardsAveragePerAttempt: 8.2,
    yardsPerGame: 5.5,
    totalRushingTouchdowns: 0,
    longestRush: '26',
    rushingFirstDowns: 4,
    rushingFirstDownPercentage: 40,
    rushingTwentyYardsEach: 1,
    rushingFortyYardsEach: 0,
    rushingFumbles: 1
  }),
  new RushingStatistic({
    player: 'Brett Hundley',
    team: 'GB',
    position: 'QB',
    rushingAttempts: 3,
    rushingAttemptsPerGameAverage: 0.8,
    totalRushingYards: -2,
    rushingYardsAveragePerAttempt: -0.7,
    yardsPerGame: -0.5,
    totalRushingTouchdowns: 0,
    longestRush: '0',
    rushingFirstDowns: 0,
    rushingFirstDownPercentage: 0,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 1
  }),
  new RushingStatistic({
    player: 'Tyreek Hill',
    team: 'KC',
    position: 'WR',
    rushingAttempts: 24,
    rushingAttemptsPerGameAverage: 1.5,
    totalRushingYards: 267,
    rushingYardsAveragePerAttempt: 11.1,
    yardsPerGame: 16.7,
    totalRushingTouchdowns: 3,
    longestRush: '70T',
    rushingFirstDowns: 10,
    rushingFirstDownPercentage: 41.7,
    rushingTwentyYardsEach: 4,
    rushingFortyYardsEach: 2,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Randall Cobb',
    team: 'GB',
    position: 'WR',
    rushingAttempts: 10,
    rushingAttemptsPerGameAverage: 0.8,
    totalRushingYards: 33,
    rushingYardsAveragePerAttempt: 3.3,
    yardsPerGame: 2.5,
    totalRushingTouchdowns: 0,
    longestRush: '14',
    rushingFirstDowns: 4,
    rushingFirstDownPercentage: 40,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Aaron Ripkowski',
    team: 'GB',
    position: 'FB',
    rushingAttempts: 34,
    rushingAttemptsPerGameAverage: 2.1,
    totalRushingYards: 150,
    rushingYardsAveragePerAttempt: 4.4,
    yardsPerGame: 9.4,
    totalRushingTouchdowns: 2,
    longestRush: '15',
    rushingFirstDowns: 10,
    rushingFirstDownPercentage: 29.4,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Chris Moore',
    team: 'BAL',
    position: 'WR',
    rushingAttempts: 3,
    rushingAttemptsPerGameAverage: 0.2,
    totalRushingYards: 19,
    rushingYardsAveragePerAttempt: 6.3,
    yardsPerGame: 1.3,
    totalRushingTouchdowns: 0,
    longestRush: '10',
    rushingFirstDowns: 1,
    rushingFirstDownPercentage: 33.3,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Jeremy Hill',
    team: 'CIN',
    position: 'RB',
    rushingAttempts: 222,
    rushingAttemptsPerGameAverage: 14.8,
    totalRushingYards: 839,
    rushingYardsAveragePerAttempt: 3.8,
    yardsPerGame: 55.9,
    totalRushingTouchdowns: 9,
    longestRush: '74T',
    rushingFirstDowns: 42,
    rushingFirstDownPercentage: 18.9,
    rushingTwentyYardsEach: 5,
    rushingFortyYardsEach: 3,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Kenneth Farrow',
    team: 'SD',
    position: 'RB',
    rushingAttempts: 60,
    rushingAttemptsPerGameAverage: 4.6,
    totalRushingYards: 192,
    rushingYardsAveragePerAttempt: 3.2,
    yardsPerGame: 14.8,
    totalRushingTouchdowns: 0,
    longestRush: '11',
    rushingFirstDowns: 10,
    rushingFirstDownPercentage: 16.7,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 1
  }),
  new RushingStatistic({
    player: 'Brandon Tate',
    team: 'BUF',
    position: 'WR',
    rushingAttempts: 3,
    rushingAttemptsPerGameAverage: 0.2,
    totalRushingYards: 48,
    rushingYardsAveragePerAttempt: 16,
    yardsPerGame: 3.2,
    totalRushingTouchdowns: 0,
    longestRush: '30',
    rushingFirstDowns: 2,
    rushingFirstDownPercentage: 66.7,
    rushingTwentyYardsEach: 1,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Philip Rivers',
    team: 'SD',
    position: 'QB',
    rushingAttempts: 14,
    rushingAttemptsPerGameAverage: 0.9,
    totalRushingYards: 35,
    rushingYardsAveragePerAttempt: 2.5,
    yardsPerGame: 2.2,
    totalRushingTouchdowns: 0,
    longestRush: '10',
    rushingFirstDowns: 2,
    rushingFirstDownPercentage: 14.3,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 2
  }),
  new RushingStatistic({
    player: 'Denard Robinson',
    team: 'JAX',
    position: 'RB',
    rushingAttempts: 41,
    rushingAttemptsPerGameAverage: 3.2,
    totalRushingYards: 144,
    rushingYardsAveragePerAttempt: 3.5,
    yardsPerGame: 11.1,
    totalRushingTouchdowns: 0,
    longestRush: '9',
    rushingFirstDowns: 4,
    rushingFirstDownPercentage: 9.8,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Donnie Jones',
    team: 'PHI',
    position: 'P',
    rushingAttempts: 1,
    rushingAttemptsPerGameAverage: 0.1,
    totalRushingYards: 0,
    rushingYardsAveragePerAttempt: 0,
    yardsPerGame: 0,
    totalRushingTouchdowns: 0,
    longestRush: '0',
    rushingFirstDowns: 0,
    rushingFirstDownPercentage: 0,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 1
  }),
  new RushingStatistic({
    player: 'Cameron Artis-Payne',
    team: 'CAR',
    position: 'RB',
    rushingAttempts: 36,
    rushingAttemptsPerGameAverage: 12,
    totalRushingYards: 144,
    rushingYardsAveragePerAttempt: 4,
    yardsPerGame: 48,
    totalRushingTouchdowns: 2,
    longestRush: '14',
    rushingFirstDowns: 5,
    rushingFirstDownPercentage: 13.9,
    rushingTwentyYardsEach: 0,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
  new RushingStatistic({
    player: 'Kevin Hogan',
    team: 'CLE',
    position: 'QB',
    rushingAttempts: 8,
    rushingAttemptsPerGameAverage: 2,
    totalRushingYards: 105,
    rushingYardsAveragePerAttempt: 13.1,
    yardsPerGame: 26.2,
    totalRushingTouchdowns: 1,
    longestRush: '28T',
    rushingFirstDowns: 5,
    rushingFirstDownPercentage: 62.5,
    rushingTwentyYardsEach: 1,
    rushingFortyYardsEach: 0,
    rushingFumbles: 0
  }),
];
