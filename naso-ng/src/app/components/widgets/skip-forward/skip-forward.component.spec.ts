import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipForwardComponent } from './skip-forward.component';

describe('SkipForwardComponent', () => {
  let component: SkipForwardComponent;
  let fixture: ComponentFixture<SkipForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipForwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
