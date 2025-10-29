import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProductDetail } from './api-product-detail';

describe('ApiProductDetail', () => {
  let component: ApiProductDetail;
  let fixture: ComponentFixture<ApiProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiProductDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiProductDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
