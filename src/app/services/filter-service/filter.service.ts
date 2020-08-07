import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFilters } from 'src/app/models/data-filters';
import { GenericFilter } from 'src/app/models/Genericfilters';
import { successLandFilter } from './successLandFilter';
import { successLaunchFilter } from './successLaunchFilter';
import { yearFilter } from './yearFilter';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public currentFilters: DataFilters = {};

  public filters: GenericFilter[] = [yearFilter, successLandFilter, successLaunchFilter];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.loadDefaultFilters();
  }

  private loadDefaultFilters() {
    this.activatedRoute.queryParams.subscribe((params) => {
      yearFilter.default = params.launch_year;
      successLaunchFilter.default = params.launch_success;
      successLandFilter.default = params.land_success;
      this.currentFilters = { ...this.currentFilters, ...params };
    });
  }

  public setFilters(dataFilters: DataFilters) {
    if (dataFilters) {
      this.currentFilters = { ...this.currentFilters, ...dataFilters };
      this.router.navigate(['filter'], {
        queryParams: this.currentFilters,
      });
    }
  }
}
