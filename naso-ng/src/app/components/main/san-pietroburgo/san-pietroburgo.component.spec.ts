import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SanPietroburgoComponent } from './san-pietroburgo.component';

describe('SanPietroburgoComponent', () => {
  let component: SanPietroburgoComponent;
  let fixture: ComponentFixture<SanPietroburgoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SanPietroburgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPietroburgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
