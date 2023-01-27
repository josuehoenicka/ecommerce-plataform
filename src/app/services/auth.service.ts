// @angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// models
import { Auth } from './../models/auth.model';
// environment
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password});
  }

  profile() {
    return this.http.get(`${this.apiUrl}/profile`);
  }

}
