import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLogin } from './api-login';

describe('ApiLogin', () => {
  let component: ApiLogin;
  let fixture: ComponentFixture<ApiLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
