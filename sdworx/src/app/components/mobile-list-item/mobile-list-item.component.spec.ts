import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileListItemComponent } from './mobile-list-item.component';

describe('MobileListItemComponent', () => {
  let component: MobileListItemComponent;
  let fixture: ComponentFixture<MobileListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
