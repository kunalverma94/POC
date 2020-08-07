import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataFilters } from 'src/app/models/data-filters';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { SpaceXDataService } from 'src/app/services/space-x-data-service/space-x-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public filterViewList: SpaceShuttle[];
  private data: SpaceShuttle[];
  private xxx: Observable<any[]>;
  public loading = false;

  private readonly filterMode = window?.location?.search !== '';

  constructor(private dataService: SpaceXDataService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.xxx = this.dataService.getSpaceData();
    // this.applyFilter();
  }

  private applyFilter() {
    this.activatedRoute.queryParams.subscribe((params: DataFilters) => {
      if (this.filterMode) {
        this.data = [];
        if (!this.hasFilter(params)) {
          return;
        }
        console.log('Applying filters...', params);
        this.dataService.getSpaceData(params).subscribe(
          (filters) => (this.filterViewList = filters),
          () => {},
          () => (this.loading = false)
        );
      } else {
        this.initilizeData();
        this.loading = false;
      }
    });
  }
  public trackItem(i, item) {
    return item.flight_number;
  }
  private initilizeData() {
    if (!this.data) {
      this.dataService.getSpaceData().subscribe(
        (data) => {
          this.data = data;
          this.filterViewList = this.data;
        },
        (err) => {
          console.log('Something went Wrong');
        },
        () => (this.loading = false)
      );
    } else {
      this.filterViewList = this.data;
    }
  }

  private hasFilter(critaria: DataFilters): boolean {
    return (critaria && Object.keys(critaria).length !== 0) || this.filterMode;
  }
}
