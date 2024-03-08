import { Observable } from 'rxjs';
import { SupplierModel } from '../../models/supplier.model';

export interface SupplierRepository {
  
  findAll(): Observable<SupplierModel[]>;
  findById(supplierId: number): Observable<SupplierModel>; 
  create(supplier: SupplierModel): Observable<SupplierModel>;
  update(supplier: SupplierModel): Observable<SupplierModel>;
  deleteById(id: number): Observable<void>; 
}