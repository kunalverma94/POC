import { Component, Input } from '@angular/core';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  public data: SpaceShuttle;
  constructor() {}
}
