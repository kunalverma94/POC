import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFilters } from 'src/app/models/data-filters';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { SpaceXDataService } from 'src/app/services/space-x-data-service/space-x-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public filterViewList: SpaceShuttle[];
  private data: SpaceShuttle[];
  public loading = true;

  constructor(private dataService: SpaceXDataService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.initilizeData();
    this.filterCheck();
  }

  private filterCheck() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.isValidFilter(params)) {
        this.dataService
          .getSpaceData(window.location.search.replace('?', '&'))
          .subscribe((data) => (this.filterViewList = data));
      } else {
        this.filterViewList = this.data;
      }
    });
  }

  private isValidFilter = (params: DataFilters) =>
    params && Object.keys(params).length !== 0 && window?.location?.search !== '';

  private initilizeData() {
    this.dataService.getSpaceData().subscribe(
      (data) => (this.data = data),
      () => {},
      () => (this.loading = false)
    );
  }
}
