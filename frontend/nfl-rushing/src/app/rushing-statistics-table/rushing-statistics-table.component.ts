import { Component, OnInit } from '@angular/core';
import { RushingStatisticService } from '../rushing-statistic.service';
import { RushingStatistic } from '../domain/rushing-statistic';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rushing-statistics-table',
  templateUrl: './rushing-statistics-table.component.html',
  styleUrls: ['./rushing-statistics-table.component.css']
})
export class RushingStatisticsTableComponent implements OnInit {
  private rushingStatistics: Observable<RushingStatistic[]>;
  private displayedColumns: string[] = [
	'player',
	'team',
	'position',
  ];
  private page: number = 1;

  constructor(private rushingStatisticService: RushingStatisticService) { }

  ngOnInit() {
    this.rushingStatistics = this.rushingStatisticService.fetch(this.page);
  }

}
