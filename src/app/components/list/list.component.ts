import { Component, Input } from '@angular/core';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  public list: SpaceShuttle[];

  @Input()
  public filter: number[];

  public trackByFn(index: number, item: SpaceShuttle) {
    return item.flight_number;
  }
}
