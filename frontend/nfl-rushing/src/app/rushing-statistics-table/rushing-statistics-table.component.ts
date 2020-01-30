import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RushingStatisticService } from '../rushing-statistic.service';
import { RushingStatistic } from '../domain/rushing-statistic';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularCsv } from 'angular-csv-ext/dist/Angular-csv';

@Component({
  selector: 'app-rushing-statistics-table',
  templateUrl: './rushing-statistics-table.component.html',
  styleUrls: ['./rushing-statistics-table.component.css']
})
export class RushingStatisticsTableComponent implements OnInit {
  dataSource: MatTableDataSource<RushingStatistic>;
  page: number = 1;
 
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

  constructor(private rushingStatisticService: RushingStatisticService) { }

  ngOnInit() {
    this.loadRushingStatisticsForCurrentPage();
  }

  applyFilter(nameFilter: string) {
    const filter = nameFilter.trim().toLowerCase();
    this.dataSource.filter = filter;
  }

  exportToCsv() {
    const filename = 'Rushing Statistics';
    const options = {
    	headers: this.displayedColumns,
    };
    new AngularCsv(this.dataSource.filteredData, filename, options);
  }

  nextPage() {
   this.page++;
   this.loadRushingStatisticsForCurrentPage();
  }
  
  previousPage() {
   this.page--;
   this.loadRushingStatisticsForCurrentPage();
  }

  private loadRushingStatisticsForCurrentPage() {
    this.rushingStatisticService.fetch(this.page).subscribe(rushingStatistics => {
      this.dataSource = new MatTableDataSource(rushingStatistics);
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
      this.dataSource.filterPredicate = this.filterPredicate;
    });
  }

  private filterPredicate(rushingStatistic: RushingStatistic, filter: string): boolean {
    return rushingStatistic.player.toLowerCase().includes(filter);
  }
  
  private sortingDataAccessor(rushingStatistic: RushingStatistic, property: string): (string | number) {
    const isLongestRushWithTouchdown = property === 'longestRush'; 
    if (isLongestRushWithTouchdown) {
      return Number(rushingStatistic.longestRush.replace("T", ""));
    }
    return rushingStatistic[property];
  }
}
