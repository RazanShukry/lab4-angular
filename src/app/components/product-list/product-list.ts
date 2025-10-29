import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  imports: []
})
export class ProductList { }




/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { ProductDetail } from '../product-detail/product-detail';
import { FormsModule } from '@angular/forms';
import { Products } from '../../services/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetail, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products: IProduct[] = [];
  selectedProduct: IProduct | null = null;

  constructor(private productsService: Products, private router: Router) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  viewDetails(product: IProduct) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = null;
  }

  goToDetails(id: number) {
    this.router.navigate(['/products', id]).then(() => {
      console.log(`Navigated to product ${id}`);
    });
  }
}

*/































/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { ProductDetail } from '../product-detail/product-detail';
import { FormsModule } from '@angular/forms';
import { Products } from '../../services/products';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetail, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products: IProduct[] = [];
  selectedProduct: IProduct | null = null;

  constructor(private productsService: Products) { }
  //private products = inject(Products);



  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
  viewDetails(product: IProduct) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = null;
  }
}
*/