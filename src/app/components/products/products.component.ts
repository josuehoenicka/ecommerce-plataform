import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'Army Of Two II',
      price: 45,
      img: '../../../assets/images/aot2.jpg'
    },
    {
      id: '2',
      name: 'inFAMOUS 2',
      price: 40,
      img: '../../../assets/images/infamous2.jpg'
    },
    {
      id: '3',
      name: 'All-Stars',
      price: 40,
      img: '../../../assets/images/allstar.jpg'
    },
    {
      id: '4',
      name: 'Minecraft',
      price: 35,
      img: '../../../assets/images/minecraft.jpg'
    },
    {
      id: '5',
      name: 'Ratchet',
      price: 25,
      img: '../../../assets/images/ratchet.jpg'
    },
    {
      id: '',
      name: '',
      price: 0,
      img: ''
    },
    {
      id: '',
      name: '',
      price: 0,
      img: ''
    },
    {
      id: '',
      name: '',
      price: 0,
      img: ''
    },
    {
      id: '',
      name: '',
      price: 0,
      img: ''
    },
    {
      id: '',
      name: '',
      price: 0,
      img: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
