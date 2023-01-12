import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ecommerce-plataform';

  favNumber:number = 3;

  img: string = 'https://source.unsplash.com/random'

  btnDisabled: boolean = false;

  btnDisabled2: boolean = true;

  progress_a: number = 100;

  progress_b: number = 58;

  person = {
    name: 'Josue',
    age: 20,
    heLovesAngular: true
  };

  names: string[] = ['Josue', 'Jorgelina', 'Juan', 'Jordana', 'Joana'];

  newName = '';

  products: Product[] = [
    {
      name: 'Army Of Two II',
      price: 35,
      image: './assets/images/aot2.jpg',
      stars: 4.9 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Army-Devils-Cartel-Sony-Playstation-Game/dp/B00A2IPVDQ/ref=sr_1_1?keywords=army+of+two+devils+poster+ps3&qid=1673557779&sprefix=army+of+two+devils+cartel+%2Caps%2C389&sr=8-1'
    },
    {
      name: 'Minecraft',
      price: 29.99,
      image: './assets/images/minecraft.jpg',
      stars: 4.8 + ' / ' +  5,
      category: 'all',
      link: 'https://www.amazon.com/-/es/Minecraft-PlayStation-3/dp/B00JQHU9RC/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31RLT5F8CIBJW&keywords=Minecraft+ps3&qid=1673556622&sprefix=minecraft+ps3%2Caps%2C484&sr=8-1'
    },
    {
      name: 'inFAMOUS II',
      price: 25,
      image: './assets/images/infamous2.png',
      stars: 4.6 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Infamous-2-Playstation-3/dp/B002I0GX88/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2B0C1K29MS64V&keywords=infamous+2&qid=1673557641&sprefix=infamous+%2Caps%2C471&sr=8-1'
    },
    {
      name: 'inFAMOUS II',
      price: 25,
      image: './assets/images/infamous2.png',
      stars: 4.6 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Infamous-2-Playstation-3/dp/B002I0GX88/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2B0C1K29MS64V&keywords=infamous+2&qid=1673557641&sprefix=infamous+%2Caps%2C471&sr=8-1'
    },
    {
      name: 'inFAMOUS II',
      price: 25,
      image: './assets/images/infamous2.png',
      stars: 4.6 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Infamous-2-Playstation-3/dp/B002I0GX88/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2B0C1K29MS64V&keywords=infamous+2&qid=1673557641&sprefix=infamous+%2Caps%2C471&sr=8-1'
    },
    {
      name: 'Crash Bandicoot',
      price: 10,
      image: './assets/images/cbnk.jpg',
      stars: 4.8 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Crash-Nitro-Kart-PlayStation-2/dp/B00008NRM7/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=102U3ZH23J3D1&keywords=crash+bandicoot+nitro+kart+ps2&qid=1673556504&sprefix=crash+bandicoot+nitro+kart+%2Caps%2C402&sr=8-1'
    },
    {
      name: 'DBZ III',
      price: 7.99,
      image: './assets/images/dbz.png',
      stars: 3.8 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Dragon-Ball-Budokai-Tenkaichi-PlayStation-2/dp/B000RW3V34/ref=sr_1_2?keywords=dragon%2Bball%2Bz%2Bbudokai%2Btenkaichi%2B3&qid=1673557870&sprefix=dragon%2Bball%2Bz%2Bbu%2Caps%2C428&sr=8-2&th=1'
    },
    {
      name: 'Spyro',
      price: 4.99,
      image: './assets/images/spyro.png',
      stars: 3.5 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Spyro-Enter-Dragonfly/dp/B00006F2ZP/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=18AZK83LLS6G6&keywords=spyro+ps2&qid=1673558060&sprefix=spyro+ps%2Caps%2C343&sr=8-2'
    },
    {
      name: 'Spyro',
      price: 4.99,
      image: './assets/images/spyro.png',
      stars: 3.5 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Spyro-Enter-Dragonfly/dp/B00006F2ZP/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=18AZK83LLS6G6&keywords=spyro+ps2&qid=1673558060&sprefix=spyro+ps%2Caps%2C343&sr=8-2'
    },
    {
      name: 'Spyro',
      price: 4.99,
      image: './assets/images/spyro.png',
      stars: 3.5 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Spyro-Enter-Dragonfly/dp/B00006F2ZP/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=18AZK83LLS6G6&keywords=spyro+ps2&qid=1673558060&sprefix=spyro+ps%2Caps%2C343&sr=8-2'
    },

  ]

  toggleButton() {
    this.btnDisabled2 = !this.btnDisabled2;
  }

  increaseAge() {
    this.person.age += 1;
  }

  decreaseAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {

    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  constructor () {
  }
}
