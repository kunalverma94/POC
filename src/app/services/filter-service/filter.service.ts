import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFilters } from 'src/app/models/data-filters';
import { GenericFilter } from 'src/app/models/Genericfilters';
import { AppFilters } from './predefined-filters';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public currentFilters: DataFilters = {};

  public filters: GenericFilter[] = AppFilters;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.loadDefaultFilters();
  }

  public setFilters(dataFilters: DataFilters) {
    if (dataFilters) {
      this.currentFilters = { ...this.currentFilters, ...dataFilters };
      this.router.navigate(['query'], {
        queryParams: this.currentFilters,
      });
    }
  }

  private loadDefaultFilters() {
    this.activatedRoute.queryParams.subscribe((params: DataFilters) => {
      this.filters.forEach((g) => (g.default = params[g.key]));
      // Object.keys(params).forEach((key) => {

      //   let f = this.filters[this.filters.findIndex((f) => f.key === key)];
      //   f.default = params[key];
      // });
      // yearFilter.default = params.launch_year;
      // successLaunchFilter.default = params.launch_success;
      // successLaunchFilter.default = params.land_success;
      this.currentFilters = { ...this.currentFilters, ...params };
    });
  }
}
