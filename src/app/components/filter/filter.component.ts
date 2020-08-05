import { Component, OnInit } from '@angular/core';
import { GenericFilter } from './../../models/Genericfilters';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public yearFilter: GenericFilter = {
    title: 'Launch Year',
    options: Array.apply(null, { length: 14 })
      .map(Number.call, Number)
      .map((j) => j + 2006),
  };

  public successLaunchFilter: GenericFilter = {
    title: 'Successful Launch',
    options: ['True', 'False'],
  };
  public successLandFilter: GenericFilter = {
    title: 'Successful Land',
    options: ['True', 'False'],
  };
  constructor() {}

  ngOnInit(): void {}
}
