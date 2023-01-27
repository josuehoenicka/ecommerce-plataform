import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ecommerce-plataform';
  imgParent = '';
  showImg = true;

  constructor () {
  }

  imgFoundOnParent(img: string) {
    console.log('log parent', img)
  }

  toogleImg() {
    this.showImg = !this.showImg;
  }

}
