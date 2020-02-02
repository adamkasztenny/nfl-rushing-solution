import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { RushingStatisticsTableComponent } from './rushing-statistics-table/rushing-statistics-table.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
      ],
      declarations: [
        AppComponent,
	MockComponent(RushingStatisticsTableComponent),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should include a table for rushing statistics', () => {
   const rushingStatisticsTable = fixture.debugElement.query(By.css('app-rushing-statistics-table'));
   expect(rushingStatisticsTable).toBeTruthy();
  });
});
