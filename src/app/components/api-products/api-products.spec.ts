import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProducts } from './api-products';

describe('ApiProducts', () => {
  let component: ApiProducts;
  let fixture: ComponentFixture<ApiProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
