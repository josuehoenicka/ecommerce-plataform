import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ecommerce-plataform';
  favNumber:number = 3;
  img: string = 'https://source.unsplash.com/random'
  btnDisabled: boolean = true;
  progress_a: number = 100;
  progress_b: number = 58;
  person = {
    name: 'Josue',
    age: 20,
    heLovesAngular: true
  };


  constructor () {
  }
}
