import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFormPageComponent } from './dog-form-page.component';

describe('DogFormPageComponent', () => {
  let component: DogFormPageComponent;
  let fixture: ComponentFixture<DogFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
