import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImageInputComponent } from './dynamic-image-input.component';

describe('DynamicImageInputComponent', () => {
  let component: DynamicImageInputComponent;
  let fixture: ComponentFixture<DynamicImageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicImageInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicImageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
