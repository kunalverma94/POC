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
  //#region Properties
  public filterViewList: Observable<SpaceShuttle[]>;
  public loading = false;
  //#endregion

  constructor(private dataService: SpaceXDataService, private filterService: FilterService) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this.filterViewList = this.dataService.getSpaceData();
  }

  ngAfterViewInit(): void {
    this.filterService.AppliedFilters.subscribe(
      (fdd) => {
        // Filter Mode and Filter Applied
        if (this.filterService.filterMode) {
          if (FilterService.hasFilter(fdd)) {
            this.filterViewList = this.dataService.getSpaceData(fdd);
          }
        } else {
          // normal loading
          this.filterViewList = this.dataService.getSpaceData();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //#endregion

  //#region Methods
  public trackItem = (i, item) => item.flight_number;

  //#endregion
}
