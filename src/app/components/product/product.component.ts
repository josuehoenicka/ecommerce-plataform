import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.module'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  }
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addedProduct.emit(this.product);
  }

  truncatedText(maxLength:number) {
    if (this.product.title.length > maxLength) {
      return this.product.title.slice(0, maxLength) + '...';
    }
    return this.product.title;
  }

}
