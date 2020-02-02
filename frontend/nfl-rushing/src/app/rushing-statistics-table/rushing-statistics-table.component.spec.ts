import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatPaginatorModule,
         MatSortModule, MatTableModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RushingStatisticsTableComponent } from './rushing-statistics-table.component';
import { RushingStatisticService } from '../rushing-statistic.service';
import { of } from 'rxjs';

describe('RushingStatisticsTableComponent', () => {
  let component: RushingStatisticsTableComponent;
  let fixture: ComponentFixture<RushingStatisticsTableComponent>;
  let rushingStatisticServiceStub: jasmine.SpyObj<RushingStatisticService>;

  beforeEach(async(() => {
    rushingStatisticServiceStub = jasmine.createSpyObj('RushingStatisticService', ['fetch'])
    rushingStatisticServiceStub.fetch.and.returnValue(of([]));

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
});
