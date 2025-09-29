import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { ProductCardDirective } from '../../directives/product-card';
import { CreditCardFormatPipe } from '../../Pipes/credit-card-fromat-pipe';



@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CommonModule, FormsModule, ProductCardDirective, CreditCardFormatPipe],
    templateUrl: './products.html',
    styleUrls: ['./products.css']
})
export class ProductsComponent {
    searchTerm: string = '';
    selectedCategoryId: number = 0;

    categories: ICategory[] = [
        { ID: 1, Name: 'Oppo' },
        { ID: 2, Name: 'Samsung' },
        { ID: 3, Name: 'Realme' }
    ];

    productList: IProduct[] = [
        { ID: 1, Name: 'Oppo Reno 13', Quantity: 5, Price: 23000, Img: 'images/Ang1.webp', CateogryID: 1 },
        { ID: 2, Name: 'Oppo A54', Quantity: 2, Price: 13000, Img: 'images/ang2.webp', CateogryID: 1 },
        { ID: 3, Name: 'Samsung Galaxy A53', Quantity: 0, Price: 9000, Img: 'images/sam1.webp', CateogryID: 2 },
        { ID: 4, Name: 'Samsung Galaxy S22', Quantity: 1, Price: 20000, Img: 'images/sam2.webp', CateogryID: 3 },
        { ID: 5, Name: 'Realme C53', Quantity: 10, Price: 11000, Img: 'images/real1.jpg', CateogryID: 1 },
        { ID: 6, Name: 'Realme C21', Quantity: 3, Price: 7000, Img: 'images/real2.webp', CateogryID: 2 }
    ];

    get filteredProducts(): IProduct[] {
        return this.productList.filter(p =>
            p.Name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
            (this.selectedCategoryId === 0 || p.CateogryID === this.selectedCategoryId)
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
        alert(`Product Details:\nName: ${product.Name}\nPrice: ${product.Price}\nQuantity: ${product.Quantity}`);
    }

    getStockMessage(quantity: number): string {
        switch (quantity) {
            case 0: return 'Out of stock';
            case 1: return 'Last one item';
            case 2: return 'Last two items';
            default: return 'In stock';
        }
    }
    today: Date = new Date();
}
