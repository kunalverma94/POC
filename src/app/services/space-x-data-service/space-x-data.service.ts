import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators/';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { environment } from 'src/environments/environment';
import { FilterService } from '../filter-service/filter.service';

@Injectable({
  providedIn: 'root',
})
export class SpaceXDataService {
  private get _serviceURL(): string {
    return environment.API.spaceXData;
  }
  constructor(private http: HttpClient, private fsvc: FilterService) {}

  public getSpaceData(): Observable<SpaceShuttle[]> {
    return this.http.get<SpaceShuttle[]>(`${this._serviceURL}${this.fsvc.filterURLBuilder()}`).pipe(
      map((o) =>
        o.map((ox) => {
          ox.land_success = ox.rocket.first_stage?.cores[0].land_success;
          return ox;
        })
      ),
      catchError((err, cactch) => {
        console.log(err);
        return [];
      })
    );
  }
}
