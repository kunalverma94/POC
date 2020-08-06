import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { SpaceXDataService } from './../../services/space-x-data-service/space-x-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public list: SpaceShuttle[];
  public column: number;
  public loading: boolean;

  constructor(private svc: SpaceXDataService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loading = true;
      this.svc.getSpaceData().subscribe((x) => {
        this.list = x;
        this.loading = false;
      });
    });
  }
}
