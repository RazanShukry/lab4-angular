import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { ProductDetails } from './components/product-detail/product-detail';
import { NotFound } from './components/not-found/not-found';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';
import { UserRegister } from './components/user-register/user-register';
import { UserLogin } from './components/user-login/user-login';
import { ApiProducts } from './components/api-products/api-products';
import { ProductDetail } from './components/api-product-detail/api-product-detail';
import { ApiRegister } from './components/api-registration/api-registration';
import { ApiLogin } from './components/api-login/api-login';
import { SearchProducts } from './components/search-products/search-products';
import { GuestGuard } from './guards/guest-guard';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'products', component: ShoppingCart },
    { path: 'products/:id', component: ProductDetails },
    { path: 'register', component: UserRegister },
    { path: 'login', component: UserLogin },
    { path: 'api-products', component: ApiProducts },
    { path: 'products/:id', component: ProductDetail },
    { path: 'api-login', component: ApiLogin, canActivate: [GuestGuard] },
    { path: 'api-register', component: ApiRegister, canActivate: [GuestGuard] },
    { path: 'search-products', component: SearchProducts },
    { path: '**', component: NotFound },

];














/*
import { Routes } from '@angular/router';

export const routes: Routes = [];
*/
