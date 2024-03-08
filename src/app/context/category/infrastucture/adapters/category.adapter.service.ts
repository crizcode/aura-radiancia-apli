import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../domain/models/category.model';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer llamadas HTTP
import { CategoryRepository } from '../../domain/ports/out/category.repository';

@Injectable({
  providedIn: 'root',
})
export class CategoryAdapterService implements CategoryRepository {
  private apiUrl = 'https://localhost:7159/api/v1/category'; // URL de tu API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  findById(categoryId: number): Observable<CategoryModel> { // Cambiado el tipo de categoryId a number
    return this.http.get<CategoryModel>(`${this.apiUrl}/list/${categoryId}`);
  }

  create(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(`${this.apiUrl}/save`, category);
  }

  update(category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(`${this.apiUrl}/update/${category.categoryId}`, category);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  findAll(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${this.apiUrl}/list`);
  }
}