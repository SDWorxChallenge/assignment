import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HickerActionsComponent } from './hicker-actions.component';

describe('HickerActionsComponent', () => {
  let component: HickerActionsComponent;
  let fixture: ComponentFixture<HickerActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HickerActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HickerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
