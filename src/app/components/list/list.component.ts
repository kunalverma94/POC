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
  public limit = 20;
  //#endregion

  constructor(private dataService: SpaceXDataService, private filterService: FilterService) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this.loadList();
    window.addEventListener('scroll', this.loadEvent());
  }

  ngAfterViewInit(): void {
    this.filterService.AppliedFilters.subscribe(
      (fdd) => {
        this.limit = 20;
        // Filter Mode and Filter Applied
        if (this.filterService.filterMode) {
          if (FilterService.hasFilter(fdd)) {
            this.filterViewList = this.dataService.getSpaceData(fdd);
          }
        } else {
          this.loadList();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.loadEvent());
  }
  //#endregion

  //#region Methods
  // re-render selected elements:Performance
  public trackItem = (i, item) => item.flight_number;

  // scroll event
  private loadEvent(): (this: Window, ev: Event) => any {
    const MOBILE_OFFSET = 150;
    return () => {
      if (window.innerHeight + window.scrollY + MOBILE_OFFSET >= document.body.scrollHeight) {
        this.limit += 10;
      }
    };
  }

  private loadList() {
    this.filterViewList = this.dataService.getSpaceData();
  }
  //#endregion
}
