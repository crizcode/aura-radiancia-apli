import { Observable } from 'rxjs';
import { SupplierModel } from '../../domain/models/supplier.model';
import { ListSupplierUseCase } from '../../domain/ports/in/list.supplier.use.case'; 
import { SupplierRepository } from '../../domain/ports/out/supplier.repository';

export class ListSupplierUseCaseImpl implements ListSupplierUseCase {

  private readonly supplierRepository: SupplierRepository;
  
  constructor(supplierRepository: SupplierRepository) {
    this.supplierRepository = supplierRepository;
  }

  findById(supplierId: number): Observable<SupplierModel | null> {
    return this.supplierRepository.findById(supplierId);
  }

  listSuppliers(): Observable<SupplierModel[]> {
    return this.supplierRepository.findAll();
  }

}