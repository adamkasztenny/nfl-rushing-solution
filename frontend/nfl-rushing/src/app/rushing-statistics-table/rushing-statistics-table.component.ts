import { Component, OnInit, ViewChild } from '@angular/core';
import { RushingStatisticService } from '../rushing-statistic.service';
import { RushingStatistic } from '../domain/rushing-statistic';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rushing-statistics-table',
  templateUrl: './rushing-statistics-table.component.html',
  styleUrls: ['./rushing-statistics-table.component.css']
})
export class RushingStatisticsTableComponent implements OnInit {
  dataSource: MatTableDataSource<RushingStatistic>

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = [
	'player',
	'team',
	'position',
	'rushingAttempts',
	'rushingAttemptsPerGameAverage',
	'rushingFirstDownPercentage',
	'rushingFirstDowns',
	'rushingFortyYardsEach',
	'rushingFumbles',
	'rushingTwentyYardsEach',
	'rushingYardsAveragePerAttempt',
	'team',
	'totalRushingTouchdowns',
  	'longestRush',
	'totalRushingYards',
	'yardsPerGame',
  ];
  private page: number = 1;

  constructor(private rushingStatisticService: RushingStatisticService) { }

  ngOnInit() {
    this.rushingStatisticService.fetch(this.page).subscribe(rushingStatistics => {
      this.dataSource = new MatTableDataSource(rushingStatistics);
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.filterPredicate;
    });
  }

  applyFilter(nameFilter: string) {
    const filter = nameFilter.trim().toLowerCase();
    this.dataSource.filter = filter;
  }

  private filterPredicate(rushingStatistic: RushingStatistic, filter: string): boolean {
    return rushingStatistic.player.toLowerCase().includes(filter);
  }
}
