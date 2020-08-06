import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { BooleanEmojiPipe } from 'src/app/pipes/boolean-Emoji-pipe';
import { SpaceXDataService } from 'src/app/services/space-x-data-service/space-x-data.service';
import { FilterComponent } from './../filter/filter.component';
import { GenericFilterComponent } from './../filter/generic-filter/generic-filter.component';
import { ListComponent } from './../list/list.component';
import { LoadingComponent } from './../shared/loading/loading.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const fakedata: SpaceShuttle[] = [
    {
      flight_number: 1,
      land_success: true,
      launch_success: true,
      launch_year: '2020',
      links: undefined,
      mission_id: ['3'],
      mission_name: '',
      rocket: undefined,
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FilterComponent,
        ListComponent,
        FilterComponent,
        BooleanEmojiPipe,
        GenericFilterComponent,
        LoadingComponent,
      ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientModule],
      providers: [SpaceXDataService],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
