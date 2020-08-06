import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  public loadBlocks = 10;
  public readonly loopArray = Array.apply(null, { length: this.loadBlocks });
}
