import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { ProductDetail } from '../product-detail/product-detail';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetail, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products: IProduct[] = [
    { ID: 1, Name: 'Oppo Reno 13', Quantity: 5, Price: 23000, Img: 'images/Ang1.webp', CateogryID: 1 },
    { ID: 2, Name: 'Oppo A54', Quantity: 2, Price: 13000, Img: 'images/ang2.webp', CateogryID: 1 },
    { ID: 3, Name: 'Samsung Galaxy A53', Quantity: 0, Price: 9000, Img: 'images/sam1.webp', CateogryID: 2 },
    { ID: 4, Name: 'Samsung Galaxy S22', Quantity: 1, Price: 20000, Img: 'images/sam2.webp', CateogryID: 3 },
    { ID: 5, Name: 'Realme C53', Quantity: 10, Price: 11000, Img: 'images/real1.jpg', CateogryID: 1 },
    { ID: 6, Name: 'Realme C21', Quantity: 3, Price: 7000, Img: 'images/real2.webp', CateogryID: 2 }
  ];

  selectedProduct: IProduct | null = null;

  viewDetails(product: IProduct) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = null;
  }
}
