import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators/';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { FilterService } from '../filter-service/filter.service';
import { BaseServiceService } from './../base-service/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class SpaceXDataService extends BaseServiceService {
  constructor(protected http: HttpClient, protected fsvc: FilterService) {
    super(http);
  }

  public getSpaceData(): Observable<SpaceShuttle[]> {
    return this.httpGET<SpaceShuttle[]>(this.fsvc.filterURLBuilder()).pipe(
      map((o) =>
        o.map((ox) => {
          ox.land_success = ox.rocket.first_stage?.cores[0].land_success;
          return ox;
        })
      ),
      catchError((err) => {
        this.logError(err);
        return of(undefined);
      })
    );
  }
}
