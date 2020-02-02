import { TestBed } from '@angular/core/testing';

import { RushingStatisticService } from './rushing-statistic.service';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { Observable } from 'rxjs';
import { RushingStatistic } from './domain/rushing-statistic';

describe('RushingStatisticService', () => {
  let controller: ApolloTestingController;
  let fakeRushingStatistics: RushingStatistic[];

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ApolloTestingModule],
      });
    controller = TestBed.get(ApolloTestingController);

    fakeRushingStatistics = [
        new RushingStatistic({player: 'Player 1'}),
        new RushingStatistic({player: 'Player 2'}),
      ];
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    const service: RushingStatisticService = TestBed.get(RushingStatisticService);
    expect(service).toBeTruthy();
  });

  it('should return an Observable of Rushing Statistics', (done: DoneFn) => {
    const service: RushingStatisticService = TestBed.get(RushingStatisticService);
    const page = 1;
    const filter = 'filter';

    const result: Observable<RushingStatistic[]> = service.fetch(page, filter);

    result.subscribe(rushingStatistics => {
      expect(rushingStatistics).toEqual(fakeRushingStatistics);
      done();
    });

    const operation = controller.expectOne(RushingStatisticService.query);
    operation.flush({
        data: {
          rushingStatistics: fakeRushingStatistics,
        }
    });
  });
});
