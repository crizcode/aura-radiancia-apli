import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { ProductRepository } from '../../domain/ports/out/product.repository';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer llamadas HTTP

@Injectable({
  providedIn: 'root',
})
export class ProductAdapterService implements ProductRepository {
  private apiUrl = 'https://localhost:7159/api/v1/Product'; 

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  findAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.apiUrl); 
  }

  findById(id: number): Observable<ProductModel | null> {
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }

  save(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.apiUrl, product);
  }

  update(product: ProductModel): Observable<ProductModel> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<ProductModel>(url, product);
  }

}