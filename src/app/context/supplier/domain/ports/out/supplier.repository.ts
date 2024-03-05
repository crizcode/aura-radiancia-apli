import { Observable } from 'rxjs';
import { SupplierModel } from '../../models/supplier.model';

export interface SupplierRepository {
  findById(id: number): Observable<SupplierModel | null>;
  findAll(): Observable<SupplierModel[]>;
}