// @angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// rxjs
import { retry } from 'rxjs/operators';
// models
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = '/api/products';

  myPersonalProducts = [
    {
      id: 1,
      title: 'Army Of Two II',
      price: 45,
      image: '../../../assets/images/aot2.jpg'
    },
    {
      id: 2,
      title: 'inFAMOUS 2',
      price: 40,
      image: '../../../assets/images/infamous2.jpg'
    },
    {
      id: 3,
      title: 'All-Stars',
      price: 40,
      image: '../../../assets/images/allstar.jpg'
    },
    {
      id: 4,
      title: 'Minecraft',
      price: 35,
      image: '../../../assets/images/minecraft.jpg'
    },
    {
      id: 5,
      title: 'Ratchet',
      price: 25,
      image: '../../../assets/images/ratchet.jpg'
    }
  ]

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset){
      params = params.set('limit', limit);
      params = params.set('offset', limit)
    }
    return this.http.get<Product[]>(this.apiUrl, { params })
    .pipe(
      retry(3)
    );
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getProductsByPage(limit: number, offset: number){
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset }
    });
  }

  create(dto: CreateProductDTO){
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(id: number, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

}
