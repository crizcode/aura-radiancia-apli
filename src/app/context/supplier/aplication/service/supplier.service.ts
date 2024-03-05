import { Observable } from 'rxjs';
import { SupplierModel } from '../../domain/models/supplier.model';
import { ListSupplierUseCase } from '../../domain/ports/in/list.supplier.use.case';

export class SupplierService implements  ListSupplierUseCase {
    
    constructor(

        private listSupplierUseCase: ListSupplierUseCase
      ) {}
  

    listSuppliers(): Observable<SupplierModel[]> {
      return this.listSupplierUseCase.listSuppliers();
    }
}