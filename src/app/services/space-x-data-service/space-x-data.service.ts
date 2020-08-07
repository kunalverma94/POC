import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { environment } from 'src/environments/environment';
import { BaseServiceService } from './../base-service/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class SpaceXDataService extends BaseServiceService {
  private get PATH(): string {
    return `/v3/launches?limit=${environment.appsettings.LIMIT}`;
  }

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getSpaceData(): Observable<SpaceShuttle[]> {
    return this.httpGET<SpaceShuttle[]>(this.PATH).pipe(
      map((o) =>
        o.map((ox) => {
          ox.land_success = ox.rocket.first_stage?.cores[0].land_success;
          return ox;
        })
      )
      // retryWhen(this.retryStratergy), //TODO WHY NOT WORKING IN ANGULAR UNIVERSE
      // catchError((err) => {
      //   this.logError(err);
      //   return of(undefined);
      // })
    );
  }

  public getQueryResult(critaria: string): Observable<number[]> {
    return this.httpGET<SpaceShuttle[]>(`${this.PATH}${critaria}`).pipe(map((o) => o.map((a) => a.flight_number)));
  }
}
