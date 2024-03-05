import { Observable } from 'rxjs';
import { SupplierModel } from '../../domain/models/supplier.model';
import { ListSupplierUseCase } from '../../domain/ports/in/list.supplier.use.case';
import { SaveSupplierUseCase } from '../../domain/ports/in/save.supplier.use.case';

export class SupplierService implements  ListSupplierUseCase, SaveSupplierUseCase{
    
    constructor(

        private listSupplierUseCase: ListSupplierUseCase,
        private SaveSupplierUseCase: SaveSupplierUseCase
      ) {}
  

    listSuppliers(): Observable<SupplierModel[]> {
      return this.listSupplierUseCase.listSuppliers();
    }

    saveSupplier(supplier: SupplierModel): Observable<SupplierModel> {
      return this.SaveSupplierUseCase.saveSupplier(supplier);
  }
}