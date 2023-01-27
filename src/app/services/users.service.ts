// @angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// models
import { User, CreateUserDTO } from './../models/user.model';
// environments
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.API_URL}/api/users`;

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateUserDTO) {
    return this.http.post<User>(this.apiUrl, dto);
  }

  getAll() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
