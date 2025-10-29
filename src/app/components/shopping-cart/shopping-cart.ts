import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from '../../services/products';
import { Router } from '@angular/router';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-cart.html',
  styleUrls: ['./shopping-cart.css']
})
export class ShoppingCart {
  constructor(private prodService: Products, private router: Router) { }

  private productSrv = inject(Products);

  products: IProduct[] = [];
  searchText = '';

  ngOnInit() {
    this.products = this.productSrv.getProducts();
  }

  goToDetails(id: number) {
    this.router.navigate(['/products', id]).then(() => {
      console.log(`Navigation complete to product ${id}`);
    });
  }

  get filteredProducts(): IProduct[] {
    return this.products.filter(p =>
      p.Name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
