import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericFilter } from 'src/app/models/Genericfilters';

@Component({
  selector: 'app-generic-filter',
  templateUrl: './generic-filter.component.html',
  styleUrls: ['./generic-filter.component.scss'],
})
export class GenericFilterComponent {
  @Input()
  public data: GenericFilter;

  @Output()
  public selectEvent = new EventEmitter();

  public activeOption = this.data?.default;

  public activate(option) {
    this.activeOption = this.activeOption === option ? undefined : option;
    this.selectEvent.emit({ [this.data.key]: this.activeOption });
  }
}
