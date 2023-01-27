
// @angular
import { Component, OnInit } from '@angular/core';
// models
import { User } from '../../models/user.model'
// services
import { AuthService } from '../../services/auth.service';
import { StoreService } from '../../services/store.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  token = '';
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toogleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.login('josuehoenicka@gmail.com', '12345678')
    .subscribe(rta => {
      console.log(rta.access_token);
      this.token = rta.access_token;
      this.getProfile();
    });
  }

  getProfile() {
    this.authService.profile(this.token)
    .subscribe(user => {
      this.profile = user;
    });
  }

}
