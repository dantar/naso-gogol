import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalePremioComponent } from './finale-premio.component';

describe('FinalePremioComponent', () => {
  let component: FinalePremioComponent;
  let fixture: ComponentFixture<FinalePremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalePremioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalePremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
