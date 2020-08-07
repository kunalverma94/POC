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
  // tslint:disable: variable-name
  private _currentFilters = new BehaviorSubject<DataFilters>({});

  public get filterMode(): boolean {
    return window?.location?.search !== '';
  }
  public filters: GenericFilter[] = AppFilters;

  public static hasFilter(critaria: DataFilters): boolean {
    return (
      critaria &&
      Object.keys(critaria).length !== 0 &&
      Object.keys(critaria).findIndex((dd) => critaria[dd] != undefined) > -1
    );
  }

  public get AppliedFilters(): BehaviorSubject<DataFilters> {
    return this._currentFilters;
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.loadDefaultFilters();
  }

  public setFilters(dataFilters: DataFilters) {
    if (dataFilters) {
      const newFilter = { ...this._currentFilters.value, ...dataFilters };
      this.router.navigate([FilterService.hasFilter(dataFilters) ? 'filter' : ''], {
        queryParams: newFilter,
      });
    }
  }

  private loadDefaultFilters() {
    this.activatedRoute.queryParams.subscribe((params: DataFilters) => {
      this.filters.forEach((g) => (g.default = params[g.key]));
      console.log(params);
      this._currentFilters.next(params);
    });
  }
}
