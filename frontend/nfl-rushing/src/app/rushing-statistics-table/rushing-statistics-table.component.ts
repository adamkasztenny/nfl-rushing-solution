import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RushingStatisticService } from '../rushing-statistic.service';
import { RushingStatistic } from '../domain/rushing-statistic';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularCsv } from 'angular-csv-ext/dist/Angular-csv';
import { fromEvent } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-rushing-statistics-table',
  templateUrl: './rushing-statistics-table.component.html',
  styleUrls: ['./rushing-statistics-table.component.css']
})
export class RushingStatisticsTableComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<RushingStatistic>;

  private page: number;
  private nameFilter: string = '';
  private pageSize = 20;
 
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('input', {static: true}) input: ElementRef;

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
    this.resetPage();
    this.loadRushingStatisticsForCurrentPage();
  }

  ngAfterViewInit() {
    this.enableFiltration();
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
  
  shouldShowPreviousButton() {
    return this.page > 1;
  }

  shouldShowNextButton() {
    return this.dataSource.data.length === this.pageSize;
  }
  
  private loadRushingStatisticsForCurrentPage() {
    this.rushingStatisticService.fetch(this.page, this.nameFilter).subscribe(rushingStatistics => {
      this.initializeDataSource(rushingStatistics);
    });
  }

  private initializeDataSource(rushingStatistics: RushingStatistic[]) {
    this.dataSource = new MatTableDataSource(rushingStatistics);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
  }

  private enableFiltration() {
    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
	debounceTime(200),
	distinctUntilChanged(),
	tap(() => {
	  this.nameFilter = this.input.nativeElement.value; 
          this.resetPage()
          this.loadRushingStatisticsForCurrentPage();
	})).subscribe();
  }

  private resetPage() {
    this.page = 1;
  }

  private sortingDataAccessor(rushingStatistic: RushingStatistic, property: string): (string | number) {
    const isLongestRushWithTouchdown = property === 'longestRush'; 
    if (isLongestRushWithTouchdown) {
      return Number(rushingStatistic.longestRush.replace("T", ""));
    }
    return rushingStatistic[property];
  }
}
