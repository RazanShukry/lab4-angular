import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-products.html',
  styleUrls: ['./search-products.css']
})
export class SearchProducts {
  keyword: string = '';
  products: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) { }

  searchProducts() {
    if (!this.keyword.trim()) return;

    this.loading = true;
    this.error = '';
    this.products = [];

    this.http.get<any>(`https://dummyjson.com/products/search?q=${this.keyword}`).subscribe({
      next: (response) => {
        this.products = response.products || [];
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch products. Please try again.';
        this.loading = false;
      }
    });
  }
}
