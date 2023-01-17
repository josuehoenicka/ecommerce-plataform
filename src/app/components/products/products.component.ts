import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
      price: 39.99,
      img: '../../../assets/images/infamous2.jpg'
    },
    {
      id: '3',
      name: 'All-Stars',
      price: 39.99,
      img: '../../../assets/images/allstar.jpg'
    },
    {
      id: '4',
      name: 'Minecraft',
      price: 34.99,
      img: '../../../assets/images/minecraft.jpg'
    },
    {
      id: '5',
      name: 'Ratchet',
      price: 29.99,
      img: '../../../assets/images/ratchet.jpg'
    },
    {
      id: '6',
      name: 'Army Of Two II',
      price: 45,
      img: '../../../assets/images/aot2.jpg'
    },
    {
      id: '7',
      name: 'inFAMOUS 2',
      price: 39.99,
      img: '../../../assets/images/infamous2.jpg'
    },
    {
      id: '8',
      name: 'All-Stars',
      price: 39.99,
      img: '../../../assets/images/allstar.jpg'
    },
    {
      id: '9',
      name: 'Minecraft',
      price: 34.99,
      img: '../../../assets/images/minecraft.jpg'
    },
    {
      id: '10',
      name: 'Ratchet',
      price: 29.99,
      img: '../../../assets/images/ratchet.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
