import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { FilterService } from 'src/app/services/filter-service/filter.service';
import { SpaceXDataService } from 'src/app/services/space-x-data-service/space-x-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
  //#region Properties
  public filterViewList: Observable<SpaceShuttle[]>;
  public loading = false;
  public limit = 30;
  //#endregion

  constructor(private dataService: SpaceXDataService, private filterService: FilterService) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this.filterViewList = this.dataService.getSpaceData();
    addEventListener('scroll', this.loadEvent());
  }

  ngAfterViewInit(): void {
    this.filterService.AppliedFilters.subscribe(
      (fdd) => {
        this.limit = 30;
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

  ngOnDestroy(): void {
    removeEventListener('scroll', this.loadEvent());
  }
  //#endregion

  //#region Methods
  public trackItem = (i, item) => item.flight_number;

  private loadEvent(): (this: Window, ev: Event) => any {
    return () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        this.limit += 10;
      }
    };
  }
  //#endregion
}
