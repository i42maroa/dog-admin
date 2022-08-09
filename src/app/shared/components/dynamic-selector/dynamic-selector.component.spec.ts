import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSelectorComponent } from './dynamic-selector.component';

describe('DynamicSelectorComponent', () => {
  let component: DynamicSelectorComponent;
  let fixture: ComponentFixture<DynamicSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
