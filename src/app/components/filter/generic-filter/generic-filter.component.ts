import { Component, Input, OnInit } from '@angular/core';
import { GenericFilter } from 'src/app/models/Genericfilters';

@Component({
  selector: 'app-generic-filter',
  templateUrl: './generic-filter.component.html',
  styleUrls: ['./generic-filter.component.scss'],
})
export class GenericFilterComponent implements OnInit {
  @Input()
  public data: GenericFilter;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
