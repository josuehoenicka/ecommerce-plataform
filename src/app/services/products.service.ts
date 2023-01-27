// @angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
// environments
import { environment } from './../../environments/environment';
// rxjs
import { retry, catchError, map } from 'rxjs/operators';
import { throwError, zip } from 'rxjs';
// models
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/api/products`;

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

  fetchReadAndUpdate(id: number, dto: UpdateProductDTO) {
    return zip(
      this.getProduct(id),
      this.update(id, dto)
    );
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === HttpStatusCode.Conflict) {
          return throwError('Ups! Fallo en el server')
        }
        if(error.status === HttpStatusCode.NotFound) {
          return throwError('El producto no existe :(')
        }
        if(error.status === HttpStatusCode.Unauthorized) {
          return throwError('No autorizado')
        }
        return throwError('Ups! Algo salio mal :(')
      })
    )
  }

  getProductsByPage(limit: number, offset: number){
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset }
    })
    .pipe
    (
      map(products => products.map(item =>{
        return {
          ...item,
          taxes: .10 * item.price
        }
      }))
    );
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
