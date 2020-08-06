import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { FilterService } from '../filter-service/filter.service';
import { SpaceXDataService } from './space-x-data.service';

describe('SpaceXDataService', () => {
  let service: SpaceXDataService;
  const fakedata: SpaceShuttle = {
    flight_number: 1,
    land_success: true,
    launch_success: true,
    launch_year: '2020',
    links: undefined,
    mission_id: ['3'],
    mission_name: '',
    rocket: undefined,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [FilterService],
    });
    service = TestBed.inject(SpaceXDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get SpaceData', async () => {
    // arrange
    const httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.returnValue(of([fakedata, fakedata]));
    // act
    service.getSpaceData().subscribe((res) => {
      // assert
      expect(res).toBeDefined();
      expect(res.length).toBe(2);
    });
  });
});
