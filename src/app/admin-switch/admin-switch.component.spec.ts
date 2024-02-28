import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSwitchComponent } from './admin-switch.component';

describe('AdminSwitchComponent', () => {
  let component: AdminSwitchComponent;
  let fixture: ComponentFixture<AdminSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
