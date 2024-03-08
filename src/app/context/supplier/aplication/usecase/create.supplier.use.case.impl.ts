import { Observable } from 'rxjs';
import { SupplierModel } from '../../domain/models/supplier.model';
import { SupplierRepository } from '../../domain/ports/out/supplier.repository';
import { CreateSupplierUseCase } from '../../domain/ports/in/create.supplier.use.case';

export class CreateSupplierUseCaseImpl implements CreateSupplierUseCase {
  
  private readonly supplierRepository: SupplierRepository;
  
  constructor(supplierRepository: SupplierRepository) {
    this.supplierRepository = supplierRepository;
  }

  createSupplier(supplier: SupplierModel): Observable<SupplierModel> {
    return this.supplierRepository.create(supplier);
  }
}