import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupplierModel } from '../../domain/models/supplier.model';
import { SupplierRepository } from '../../domain/ports/out/supplier.repository';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer llamadas HTTP

@Injectable({
  providedIn: 'root',
})
export class SupplierAdapterService implements SupplierRepository {
  private apiUrl = 'https://localhost:7159/api/v1/Supplier'; // URL de tu API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  
  findById(id: number): Observable<SupplierModel | null> {
    return this.http.get<SupplierModel>(`${this.apiUrl}/${id}`); // Realiza una petición GET a la API
  }

  findAll(): Observable<SupplierModel[]> {
    return this.http.get<SupplierModel[]>(this.apiUrl); // Realiza una petición GET a la API
  }
}
