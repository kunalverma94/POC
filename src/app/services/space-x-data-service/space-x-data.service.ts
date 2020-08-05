import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataFilters } from 'src/app/models/data-filters';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpaceXDataService {
  private get _serviceURL(): string {
    return environment.API.spaceXData;
  }
  // tslint:disable-next-line: variable-name
  private _currentFilters: DataFilters = { limit: environment.appsettings.limit };
  public spaceData: BehaviorSubject<SpaceShuttle[]> = new BehaviorSubject<SpaceShuttle[]>([]);

  constructor(private http: HttpClient) {
    this.loadNext();
  }

  public loadFilter(dataFilters?: DataFilters) {
    if (dataFilters) {
      this._currentFilters = { ...this._currentFilters, ...dataFilters };
    }
    this.loadNext();
  }
  private loadNext() {
    this.http.get<SpaceShuttle[]>(this.urlBuilder()).subscribe((x) => this.spaceData.next(x));
  }

  private urlBuilder(): string {
    const urlBuilder = [this._serviceURL];
    Object.keys(this._currentFilters).forEach((p) => {
      if (this._currentFilters[p] != undefined) {
        urlBuilder.push(`${p}=${this._currentFilters[p]}`);
      }
    });
    return urlBuilder.join('&');
  }
}
