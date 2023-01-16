import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ecommerce-plataform';
  imgParent = '';


  constructor () {
  }

  imgFoundOnParent(img: string) {
    console.log('log parent', img)
  }

}
