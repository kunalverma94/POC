import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';
import { BooleanEmojiPipe } from 'src/app/pipes/boolean-Emoji-pipe';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  const fakedata: SpaceShuttle = {
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
      declarations: [ItemComponent, BooleanEmojiPipe],
      imports: [LazyLoadImageModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a card with data', () => {
    component.data = fakedata;
    fixture.detectChanges();
    const title = fixture.debugElement.nativeElement.querySelector('.card-title');
    expect(title).toBeDefined();
  });
});
