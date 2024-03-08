import { Observable } from 'rxjs';
import { SupplierModel } from '../../models/supplier.model';

export interface ListSupplierUseCase {

  listSuppliers(): Observable<SupplierModel[]>;
  findById(supplierId: number): Observable<SupplierModel | null>;
  
}