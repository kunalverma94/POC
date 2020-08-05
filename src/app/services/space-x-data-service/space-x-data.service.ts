import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { environment } from 'src/environments/environment';
import { OEMDATA } from './oem';

@Injectable({
  providedIn: 'root',
})
export class SpaceXDataService {
  private get _serviceURL(): string {
    return environment.API.spaceXData;
  }
  constructor(private http: HttpClient) {}
  public getList(): Observable<SpaceShuttle[]> {
    return of(OEMDATA);
    // return this.http.get<SpaceShuttle[]>(`${this._serviceURL}launches?limit=5`);
  }
}
