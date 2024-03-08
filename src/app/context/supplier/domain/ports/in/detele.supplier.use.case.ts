import { Observable } from 'rxjs';

export interface DeleteSupplierUseCase {
  deleteSupplier(supplierId: number): Observable<void>;
}