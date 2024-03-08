import { Observable } from 'rxjs';
import { SupplierModel } from '../../domain/models/supplier.model';
import { ListSupplierUseCase } from '../../domain/ports/in/list.supplier.use.case';
import { CreateSupplierUseCase } from '../../domain/ports/in/create.supplier.use.case';
import { UpdateSupplierUseCase } from '../../domain/ports/in/update.supplier.use.case';
import { DeleteSupplierUseCase } from '../../domain/ports/in/detele.supplier.use.case';

export class SupplierService implements
ListSupplierUseCase,
CreateSupplierUseCase,
UpdateSupplierUseCase,
DeleteSupplierUseCase {

constructor(
  private listSupplierUseCase: ListSupplierUseCase,
  private createSupplierUseCase: CreateSupplierUseCase,
  private updateSupplierUseCase: UpdateSupplierUseCase,
  private deleteSupplierUseCase: DeleteSupplierUseCase
) {}

listSuppliers(): Observable<SupplierModel[]> {
  return this.listSupplierUseCase.listSuppliers();
}

createSupplier(supplier: SupplierModel): Observable<SupplierModel> {
  return this.createSupplierUseCase.createSupplier(supplier);
}

findById(supplierId: number): Observable<SupplierModel | null> { // Corregido el tipo de retorno a Observable<SupplierModel | null>
  return this.listSupplierUseCase.findById(supplierId);
}


updateSupplier(supplier: SupplierModel): Observable<SupplierModel> {
  return this.updateSupplierUseCase.updateSupplier(supplier);
}

deleteSupplier(supplierId: number): Observable<void> {
  return this.deleteSupplierUseCase.deleteSupplier(supplierId);
}
}