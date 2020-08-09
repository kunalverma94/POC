import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataFilters } from 'src/app/models/data-filters';
import { GenericFilter } from 'src/app/models/Genericfilters';
import { AppFilters } from './predefined-filters';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  //#region Proerties
  // tslint:disable: variable-name
  private _currentFilters = new BehaviorSubject<DataFilters>({});

  public filters: GenericFilter[] = AppFilters;

  public get filterMode(): boolean {
    return window?.location?.search !== '';
  }

  public get AppliedFilters(): BehaviorSubject<DataFilters> {
    return this._currentFilters;
  }

  public static hasFilter = (critaria: DataFilters) =>
    critaria &&
    Object.keys(critaria).length !== 0 &&
    // tslint:disable-next-line: triple-equals
    Object.keys(critaria).findIndex((dd) => critaria[dd] != undefined) > -1;
  //#endregion

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.loadDefaultFilters();
  }
  //#region Methods
  public setFilters(dataFilters: DataFilters) {
    if (dataFilters) {
      const newFilter = { ...this._currentFilters.value, ...dataFilters };
      this.router.navigate([FilterService.hasFilter(dataFilters) ? 'query' : ''], {
        queryParams: newFilter,
      });
    }
  }

  private loadDefaultFilters() {
    this.activatedRoute.queryParams.subscribe((params: DataFilters) => {
      this.filters.forEach((g) => (g.default = params[g.key]));
      this._currentFilters.next(params);
    });
  }
  //#endregion
}
