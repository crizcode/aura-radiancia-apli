import { Observable } from 'rxjs';
import { SupplierModel } from '../../models/supplier.model';

export interface CreateSupplierUseCase {
  createSupplier(supplier: SupplierModel): Observable<SupplierModel>;
}