import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsListPageComponent } from './dogs-list.component';

describe('DogsListComponent', () => {
  let component: DogsListPageComponent;
  let fixture: ComponentFixture<DogsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
