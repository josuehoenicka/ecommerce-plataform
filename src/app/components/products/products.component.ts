// @angular
import { Component, OnInit } from '@angular/core';
// modules
import { Product } from '../../models/product.module';
// services
import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = []

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(dataAPI => {
      this.products = dataAPI;
    });
  }

  addToShoppingCart(product: Product) {
    // this.myShoppingCart.push(product);
    this.storeService.addProduct(product);
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    this.total = this.storeService.getTotal();
  }

}
