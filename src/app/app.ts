import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './components/products/products';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Side } from './components/side/side';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, Footer, Header, Side, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('lab2');
}
