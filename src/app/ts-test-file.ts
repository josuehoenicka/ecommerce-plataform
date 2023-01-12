import { NumberFormatStyle } from "@angular/common";

const favNumber: number = 3;

const text: string | number = 'My favorite number is: ' + favNumber;

const sum = (a:number , b:number) => {
  return a + b;
}

sum(favNumber, 4);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

class Person {
  name: string;
  personLovesAngular: boolean;
  isYear: number;
  private biggestSecret: string = "It's a secret";

  constructor(name: string, personLovesAngular: boolean, isYear: NumberFormatStyle) {
    this.name = name;
    this.personLovesAngular = personLovesAngular;
    this.isYear = isYear;
  }

  get() {
    this.biggestSecret;
  }

}

const josuehoenicka = new Person('Josue Hoenicka', true, 2023);
josuehoenicka.personLovesAngular;

class Person2 {

  constructor(public name: string, public personLovesAngular: boolean, public isYear: number, private biggestSecret: string) {
    this.name = name;
    this.personLovesAngular = personLovesAngular;
    this.isYear = isYear;
  }

  set() {
    this.biggestSecret = "It's a secret";
  }

}

const gabrielsolari = new Person2('Josue Hoenicka', false, 2023, "I like Python");
gabrielsolari.personLovesAngular
