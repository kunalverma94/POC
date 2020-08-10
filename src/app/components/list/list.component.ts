import { AfterContentInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { FilterService } from 'src/app/services/filter-service/filter.service';
import { SpaceXDataService } from 'src/app/services/space-x-data-service/space-x-data.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterContentInit, OnDestroy {
  //#region Properties
  public filterViewList: Observable<SpaceShuttle[]>;
  public limit = 20;

  @ViewChildren(ItemComponent)
  private items;
  //#endregion

  constructor(
    private dataService: SpaceXDataService,
    private filterService: FilterService,
    private ref: ChangeDetectorRef
  ) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.filterService.AppliedFilters.subscribe(
      (fdd) => {
        this.limit = 20;
        // Filter Mode and Filter Applied
        // Could have gone for simple filter without api
        // As mentioned in assignment to use api endpoint for filter
        if (this.filterService.filterMode) {
          if (FilterService.hasFilter(fdd)) {
            this.filterViewList = this.dataService.getSpaceData(fdd);
          }
        } else {
          if (!this.items || this.items?.length === 0) {
            this.loadList();
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
    window.addEventListener('scroll', this.loadEvent());
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
