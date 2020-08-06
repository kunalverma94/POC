import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter-service/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(public fsvc: FilterService) {}

  public loadFilter($data) {}

  ngOnInit(): void {}
}
