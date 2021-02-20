import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaninoComponent } from './panino.component';

describe('PaninoComponent', () => {
  let component: PaninoComponent;
  let fixture: ComponentFixture<PaninoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaninoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
