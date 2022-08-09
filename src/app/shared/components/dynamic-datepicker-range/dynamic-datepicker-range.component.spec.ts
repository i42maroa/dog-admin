import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDatepickerRangeComponent } from './dynamic-datepicker-range.component';

describe('DynamicDatepickerRangeComponent', () => {
  let component: DynamicDatepickerRangeComponent;
  let fixture: ComponentFixture<DynamicDatepickerRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDatepickerRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDatepickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
