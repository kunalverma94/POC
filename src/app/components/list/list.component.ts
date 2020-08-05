import { Component, OnInit } from '@angular/core';
import { SpaceXDataService } from './../../services/space-x-data-service/space-x-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public list: any[];
  constructor(private svc: SpaceXDataService) {}

  ngOnInit(): void {
    this.svc.getList().subscribe((x) => (this.list = x));
  }
}
