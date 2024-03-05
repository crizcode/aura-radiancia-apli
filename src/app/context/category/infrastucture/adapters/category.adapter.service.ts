import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../domain/models/category.model';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer llamadas HTTP
import { CategoryRepository } from '../../domain/ports/out/category.repository';

@Injectable({
  providedIn: 'root',
})
export class CategoryAdapterService implements CategoryRepository {
  private apiUrl = 'https://localhost:7159/api/v1/Category'; // URL de tu API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  
  findById(id: number): Observable<CategoryModel | null> {
    return this.http.get<CategoryModel>(`${this.apiUrl}/${id}`); // Realiza una petición GET a la API
  }

  findAll(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiUrl); // Realiza una petición GET a la API
  }
}
