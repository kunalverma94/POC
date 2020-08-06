import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericFilter } from 'src/app/models/Genericfilters';

@Component({
  selector: 'app-generic-filter',
  templateUrl: './generic-filter.component.html',
  styleUrls: ['./generic-filter.component.scss'],
})
export class GenericFilterComponent implements OnInit {
  @Input()
  public data: GenericFilter;

  @Output()
  public selectEvent = new EventEmitter();

  public activeOption = this.data?.default;

  constructor() {}

  public activate(option) {
    if (this.activeOption === option) {
      this.activeOption = undefined;
    } else {
      this.activeOption = option;
    }
    const g = {};
    g[this.data.key] = this.activeOption;
    this.selectEvent.emit(g);
  }
  ngOnInit(): void {}
}
