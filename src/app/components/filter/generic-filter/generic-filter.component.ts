import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericFilter } from 'src/app/models/Genericfilters';

@Component({
  selector: 'app-generic-filter',
  templateUrl: './generic-filter.component.html',
  styleUrls: ['./generic-filter.component.scss'],
})
export class GenericFilterComponent {
  //#region Proerties

  @Input()
  public data: GenericFilter;

  @Output()
  public selectEvent = new EventEmitter();

  //#endregion

  //#region Methods
  public activate(option) {
    // tslint:disable-next-line: triple-equals
    this.data.default = this.data?.default == option ? undefined : option;
    this.selectEvent.emit({ [this.data.key]: this.data.default });
  }
  //#endregion
}
