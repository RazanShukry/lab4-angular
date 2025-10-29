import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRegister } from './api-registration';

describe('ApiRegistration', () => {
  let component: ApiRegister;
  let fixture: ComponentFixture<ApiRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiRegister]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApiRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
