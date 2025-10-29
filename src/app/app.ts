import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Clock } from './components/clock/clock';
import { CommonModule } from '@angular/common';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Clock, Header, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showClock = true;
}



























/*

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
*/