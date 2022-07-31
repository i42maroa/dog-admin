import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailCardComponent } from './dog-detail-card.component';

describe('DogDetailCardComponent', () => {
  let component: DogDetailCardComponent;
  let fixture: ComponentFixture<DogDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogDetailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
