import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { RushingStatistic } from './domain/rushing-statistic';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RushingStatisticService {
  static query = gql`
	query RushingStatistics($page: int64!) {
	  rushingStatistics(page: $page) {
	      longestRush
	      player
	      position
	      rushingAttempts
	      rushingAttemptsPerGameAverage
	      rushingFirstDownPercentage
	      rushingFirstDowns
	      rushingFortyYardsEach
	      rushingFumbles
	      rushingTwentyYardsEach
	      rushingYardsAveragePerAttempt
	      team
	      totalRushingTouchdowns
	      totalRushingYards
	      yardsPerGame
	    }
	}
  `;

  constructor(private apollo: Apollo) { }

  fetch(page: number): Observable<RushingStatistic[]> {
    return this.apollo.watchQuery({query: RushingStatisticService.query, variables: {page}})
      .valueChanges.pipe(map(({data}) => this.toRushingStatistics(data['rushingStatistics'])));
  }

  toRushingStatistics(rushingStatistics: object[]): RushingStatistic[] {
    return rushingStatistics.map(rushingStatistic => new RushingStatistic(rushingStatistic));
  }
}
