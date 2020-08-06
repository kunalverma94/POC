import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericFilterComponent } from './generic-filter.component';

describe('GenericFilterComponent', () => {
  let component: GenericFilterComponent;
  let fixture: ComponentFixture<GenericFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenericFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should generate filter UI for test input', () => {
    component.data = { key: 'test', options: [1, 2, 3], title: 'test', default: '1' };
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelectorAll('.options').length).toBe(component.data.options.length);
  });
});
