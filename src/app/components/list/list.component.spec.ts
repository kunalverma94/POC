import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BooleanEmojiPipe } from 'src/app/pipes/boolean-Emoji-pipe';
import { SpaceXDataService } from 'src/app/services/space-x-data-service/space-x-data.service';
import { ItemComponent } from '../item/item.component';
import { LoadingComponent } from './../shared/loading/loading.component';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  const fakedata: any = {
    flight_number: 1,
    land_success: true,
    launch_success: true,
    launch_year: '2020',
    links: undefined,
    mission_id: ['3'],
    mission_name: '',
    rocket: undefined,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, LoadingComponent, ItemComponent, BooleanEmojiPipe],
      providers: [SpaceXDataService],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
    fixture = TestBed.createComponent(ListComponent);
    const datasvc = TestBed.inject(SpaceXDataService);
    spyOn(datasvc, 'getSpaceData').and.returnValue(of([fakedata, fakedata]));
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
