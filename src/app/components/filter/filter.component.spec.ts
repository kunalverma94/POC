import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterService } from 'src/app/services/filter-service/filter.service';
import { FilterComponent } from './filter.component';

export class MockFilterService extends FilterService {}

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [FilterService],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 genericFilters', () => {
    const childs = fixture.debugElement.nativeElement.querySelectorAll('app-generic-filter');
    expect(childs.length).toBe(3);
  });
});
