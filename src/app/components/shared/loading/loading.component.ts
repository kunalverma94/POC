import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  public loadBlocks = 10;
  public readonly loopArray = Array.apply(null, { length: this.loadBlocks });
  constructor() {}

  ngOnInit(): void {}
}
