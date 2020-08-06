import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { SpaceXDataService } from './../../services/space-x-data-service/space-x-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public list: SpaceShuttle[];
  public column: number;
  public loading = true;

  constructor(private svc: SpaceXDataService, private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loading = true;
      if (Object.keys(params).length === 0 && window?.location?.search != '') {
        return;
      } else {
        this.svc.getSpaceData().subscribe((x) => {
          this.list = x;
          this.loading = false;
        });
      }
    });
  }
}
