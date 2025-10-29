import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private prodSrv = inject(Products);
  product?: IProduct;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.prodSrv.getProductByID(id);
  }
}



























/*
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail {
  @Input() product!: IProduct;
  @Output() close = new EventEmitter<void>();


  closeDetails() {
    this.close.emit();
  }
}
*/