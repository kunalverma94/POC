import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpaceXDataService } from './../../services/space-x-data-service/space-x-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  public list: any[];

  public column: number;
  constructor(private svc: SpaceXDataService) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.svc.spaceData.subscribe((x) => (this.list = x));
  }
}
