import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatPaginatorModule,
         MatSortModule, MatTableModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RushingStatisticsTableComponent } from './rushing-statistics-table.component';
import { RushingStatisticService } from '../rushing-statistic.service';
import { of } from 'rxjs';
import { TEST_RUSHING_STATISTICS } from './test-rushing-statistics';

describe('RushingStatisticsTableComponent', () => {
  let component: RushingStatisticsTableComponent;
  let fixture: ComponentFixture<RushingStatisticsTableComponent>;
  let rushingStatisticServiceStub: jasmine.SpyObj<RushingStatisticService>;

  beforeEach(async(() => {
    rushingStatisticServiceStub = jasmine.createSpyObj('RushingStatisticService', ['fetch'])
    rushingStatisticServiceStub.fetch.and.returnValue(of(TEST_RUSHING_STATISTICS));

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
      ],
      declarations: [ RushingStatisticsTableComponent ],
      providers: [{provide: RushingStatisticService, useValue: rushingStatisticServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RushingStatisticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the initial rushing statistics', () => {
    expect(rushingStatisticServiceStub.fetch).toHaveBeenCalledTimes(1);  
    const initialPage = 1;
    const noFilter = '';
    expect(rushingStatisticServiceStub.fetch).toHaveBeenCalledWith(initialPage, noFilter);  
  });

  describe('Table', () => {
    it('should include the player name', () => {
      checkHeader('Player');
      checkContainsData('player');
    });
    
    it('should include the team', () => {
      checkHeader('Team');
      checkContainsData('team');
    });
    
    it('should include the position', () => {
      checkHeader('Pos');
      checkContainsData('position');
    });
    
    it('should include the rushing attempts per game average', () => {
      checkHeader('Att/G');
      checkContainsData('rushingAttemptsPerGameAverage');
    });
    
    it('should include the rushing attempts', () => {
      checkHeader('Att');
      checkContainsData('rushingAttempts');
    });
    
    it('should include the total rushing yards', () => {
      checkHeader('Yrds');
      checkContainsData('totalRushingYards');
    });
    
    it('should include the rushing yards average per attempt', () => {
      checkHeader('Avg');
      checkContainsData('rushingYardsAveragePerAttempt');
    });

    it('should include the yards per game', () => {
      checkHeader('Yds/G');
      checkContainsData('yardsPerGame');
    });
    
    it('should include the total rushing touchdowns', () => {
      checkHeader('TD');
      checkContainsData('totalRushingTouchdowns');
    });

    it('should include the longest rushes', () => {
      checkHeader('Lng');
      checkContainsData('longestRush');
    });

    it('should include the rushing first downs', () => {
      checkHeader('1st');
      checkContainsData('rushingFirstDowns');
    });
    
    it('should include rushing twenty yards each', () => {
      checkHeader('20+');
      checkContainsData('rushingTwentyYardsEach');
    });
    
    it('should include rushing forty yards each', () => {
      checkHeader('40+');
      checkContainsData('rushingFortyYardsEach');
    });
    
    it('should include rushing fumbles', () => {
      checkHeader('FUM');
      checkContainsData('rushingFumbles');
    });

    function checkHeader(headerName: string) {
      expect(pageText()).toContain(headerName);
    }

    function checkContainsData(field: string) {
      TEST_RUSHING_STATISTICS.forEach(rushingStatistic => {
        expect(pageText()).toContain(rushingStatistic[field]);
      }); 
    }

    function pageText(): string {
      return fixture.debugElement.nativeElement.textContent;
    }
  });
});
