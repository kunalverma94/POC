import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, scan } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseServiceService {
  protected get _serviceURL(): string {
    return environment.API.spaceXData;
  }

  constructor(protected http: HttpClient) {}

  protected httpGET<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this._serviceURL}${url}`);
  }

  protected retryStratergy = (err: Observable<any>) => {
    if (environment.production) {
      return err.pipe();
    } else {
      return err.pipe(
        scan((retryCount) => {
          retryCount += 1;
          if (retryCount < 6) {
            console.log('Retrying #', retryCount);
            return retryCount;
          } else {
            throw new Error('faile to get data');
          }
        }, 0),
        delay(2000)
      );
    }
  }

  protected logError(err: any) {
    console.log(new Date(), 'logging error....', err);
  }
}
