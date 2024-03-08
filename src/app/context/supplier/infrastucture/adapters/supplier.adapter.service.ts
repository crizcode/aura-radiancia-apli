import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupplierModel } from '../../domain/models/supplier.model';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer llamadas HTTP
import { SupplierRepository } from '../../domain/ports/out/supplier.repository';

@Injectable({
  providedIn: 'root',
})
export class SupplierAdapterService implements SupplierRepository {
  private apiUrl = 'https://localhost:7159/api/v1/supplier'; // URL de tu API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  findById(supplierId: number): Observable<SupplierModel> { // Cambiado el tipo de supplierId a number
    return this.http.get<SupplierModel>(`${this.apiUrl}/list/${supplierId}`);
  }

  create(supplier: SupplierModel): Observable<SupplierModel> {
    return this.http.post<SupplierModel>(`${this.apiUrl}/save`, supplier);
  }

  update(supplier: SupplierModel): Observable<SupplierModel> {
    return this.http.put<SupplierModel>(`${this.apiUrl}/update/${supplier.supplierId}`, supplier);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  findAll(): Observable<SupplierModel[]> {
    return this.http.get<SupplierModel[]>(`${this.apiUrl}/list`);
  }
}