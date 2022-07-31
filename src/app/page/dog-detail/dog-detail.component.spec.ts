import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailPageComponent } from './dog-detail.component';

describe('DogDetailComponent', () => {
  let component: DogDetailPageComponent;
  let fixture: ComponentFixture<DogDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
