import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RushingStatisticsTableComponent } from './rushing-statistics-table.component';

describe('RushingStatisticsTableComponent', () => {
  let component: RushingStatisticsTableComponent;
  let fixture: ComponentFixture<RushingStatisticsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RushingStatisticsTableComponent ]
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
