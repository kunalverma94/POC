import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { FilterService } from 'src/app/services/filter-service/filter.service';
import { SpaceXDataService } from 'src/app/services/space-x-data-service/space-x-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  public filterViewList: Observable<SpaceShuttle[]>;
  public loading = false;

  constructor(private dataService: SpaceXDataService, private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterViewList = this.dataService.getSpaceData();
  }

  ngAfterViewInit(): void {
    this.filterService.AppliedFilters.subscribe((fdd) => {
      if (this.filterService.filterMode) {
        if (FilterService.hasFilter(fdd)) {
          this.filterViewList = this.dataService.getSpaceData(fdd);
        }
      } else {
        console.log('loading all...');
        this.filterViewList = this.dataService.getSpaceData();
      }
    });
  }

  public trackItem(i, item) {
    return item.flight_number;
  }
}
