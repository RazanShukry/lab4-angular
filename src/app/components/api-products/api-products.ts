import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/api-product';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { ProductCardDirective } from '../../directives/product-card';
import { CreditCardFormatPipe } from '../../Pipes/credit-card-fromat-pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardDirective, CreditCardFormatPipe, RouterLink],
  templateUrl: './api-products.html',
  styleUrls: ['./api-products.css']
})
export class ApiProducts implements OnInit {
  searchTerm: string = '';
  selectedCategoryId: number = 0;
  products: IProduct[] = [];
  categories: ICategory[] = [];
  today: Date = new Date();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data as unknown as IProduct[]),
      error: (err) => console.error('Error loading products', err)
    });
  }

  loadCategories(): void {
    this.productService.getAllCategories().subscribe({
      next: (data) => (this.categories = data as unknown as ICategory[]),
      error: (err) => console.error('Error loading categories', err)
    });
  }

  get filteredProducts(): IProduct[] {
    return this.products.filter(
      p => p.Name?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  buyProduct(product: IProduct): void {
    if (product.Quantity >= 2) {
      product.Quantity -= 2;
    } else {
      product.Quantity = 0;
    }
  }

  showDetails(product: IProduct): void {
    this.router.navigate(['/product-details', product.ID]);
  }

  getStockMessage(quantity: number): string {
    switch (quantity) {
      case 0: return 'Out of stock';
      case 1: return 'Last one item';
      case 2: return 'Last two items';
      default: return 'In stock';
    }
  }
}
