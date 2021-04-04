import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationUnderlineComponent } from './location-underline.component';

describe('LocationUnderlineComponent', () => {
  let component: LocationUnderlineComponent;
  let fixture: ComponentFixture<LocationUnderlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationUnderlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
