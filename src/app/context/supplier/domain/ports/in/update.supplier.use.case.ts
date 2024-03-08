import { Observable } from 'rxjs';
import { SupplierModel } from '../../models/supplier.model';

export interface UpdateSupplierUseCase {
  updateSupplier(supplier: SupplierModel): Observable<SupplierModel>;
}