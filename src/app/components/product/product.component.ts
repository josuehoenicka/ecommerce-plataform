import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.module'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    name: '',
    price: 0,
    img: ''
  }
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addedProduct.emit(this.product);
  }

}
