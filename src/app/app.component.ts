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
