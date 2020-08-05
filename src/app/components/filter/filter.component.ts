import { Component, OnInit } from '@angular/core';
import { SpaceXDataService } from 'src/app/services/space-x-data-service/space-x-data.service';
import { GenericFilter } from './../../models/Genericfilters';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public yearFilter: GenericFilter = {
    title: 'Launch Year',
    options: Array.apply(null, { length: 15 })
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

  constructor(public svc: SpaceXDataService) {}

  public applyFilter($data) {
    this.svc.loadFilter({ launch_year: $data });
  }
  ngOnInit(): void {}
}
