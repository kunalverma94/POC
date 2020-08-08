import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators/';
import { DataFilters } from 'src/app/models/data-filters';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { environment } from 'src/environments/environment';
import { FilterService } from '../filter-service/filter.service';
import { BaseServiceService } from './../base-service/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class SpaceXDataService extends BaseServiceService {
  //#region Proerties
  private get PATH(): string {
    return `/v3/launches?limit=${environment.appsettings.LIMIT}`;
  }
  private seedData: Observable<SpaceShuttle[]>;
  //#endregion

  constructor(protected http: HttpClient) {
    super(http);
  }

  //#region Methods

  public getSpaceData(critaria: DataFilters = {}): Observable<SpaceShuttle[]> {
    if (!FilterService.hasFilter(critaria) && this.seedData) {
      // Handle the case when service worker is stopped by user
      return this.seedData;
    } else {
      return this.httpGET<SpaceShuttle[]>(`${this.PATH}${this.getUrlFromCritarion(critaria)}`).pipe(
        this.organizeData(critaria)
      );
    }
  }

  //#endregion

  //#region Helper Private Methods

  private getUrlFromCritarion(critaria: DataFilters) {
    if (FilterService.hasFilter(critaria)) {
      const urlQue = [];
      Object.keys(critaria).forEach((v) => urlQue.push(`${v}=${critaria[v]}`));
      return '&' + urlQue.join('&').toLowerCase();
    } else {
      return '';
    }
  }

  private organizeData(critaria: DataFilters): OperatorFunction<SpaceShuttle[], SpaceShuttle[]> {
    return map((o: SpaceShuttle[]) => {
      const spaceData = o.map((ox) => {
        ox.land_success = ox.rocket?.first_stage?.cores[0].land_success;
        return ox;
      });
      this.setSeed(critaria, spaceData);
      return spaceData;
    });
  }

  private setSeed(critaria: DataFilters, spaceData: SpaceShuttle[]) {
    if (!this.seedData && !FilterService.hasFilter(critaria)) {
      this.seedData = of(spaceData);
    }
  }

  //#endregion
}
