import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFilters } from 'src/app/models/data-filters';
import { GenericFilter } from 'src/app/models/Genericfilters';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public currentFilters: DataFilters = {};

  public yearFilter: GenericFilter = {
    title: 'Launch Year',
    options: Array.apply(null, { length: 15 })
      .map(Number.call, Number)
      .map((j) => j + 2006),
    key: 'launch_year',
  };

  public successLaunchFilter: GenericFilter = {
    title: 'Successful Launch',
    key: 'launch_success',
    options: ['True', 'False'],
  };

  public successLandFilter: GenericFilter = {
    title: 'Successful Land',
    key: 'land_success',
    options: ['True', 'False'],
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.yearFilter.default = params.launch_year;
      this.successLaunchFilter.default = params.launch_success;
      this.successLandFilter.default = params.land_success;
      this.currentFilters = { ...this.currentFilters, ...params };
    });
  }

  public setFilters(dataFilters: DataFilters) {
    if (dataFilters) {
      this.currentFilters = { ...this.currentFilters, ...dataFilters };
      this.router.navigate([''], {
        queryParams: this.currentFilters,
      });
    }
  }
}
