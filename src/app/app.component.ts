import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ecommerce-plataform';
  imgParent = '';
  showImg = true;
  token = '';

  constructor (
    private authService: AuthService,
    private userService: UsersService
  ) {
  }

  imgFoundOnParent(img: string) {
    console.log('log parent', img)
  }

  toogleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.userService.create({
      name: 'Josue',
      email: 'josuehoenicka@gmail.com',
      password: '12345678'
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }

  login() {
    this.authService.login('josuehoenicka@gmail.com', '12345678')
    .subscribe(rta => {
      console.log(rta.access_token);
      this.token = rta.access_token;
    });
  }

  getProfile() {
    this.authService.profile(this.token)
    .subscribe( profile => {
      console.log(profile);
    });
  }

}
