import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer llamadas HTTP
import { ProductRepository } from '../../domain/ports/out/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductAdapterService implements ProductRepository {
  private apiUrl = 'https://localhost:7159/api/v1/product'; // URL de tu API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  findById(productId: number): Observable<ProductModel> { // Cambiado el tipo de productId a number
    return this.http.get<ProductModel>(`${this.apiUrl}/list/${productId}`);
  }

  create(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(`${this.apiUrl}/save`, product);
  }

  update(product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.apiUrl}/update/${product.id}`, product);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  findAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.apiUrl}/list`);
  }
}