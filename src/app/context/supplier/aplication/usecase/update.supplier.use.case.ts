import { Observable } from 'rxjs';
import { SupplierModel } from '../../domain/models/supplier.model';
import { SupplierRepository } from '../../domain/ports/out/supplier.repository';
import { UpdateSupplierUseCase } from '../../domain/ports/in/update.supplier.use.case';

export class UpdateSupplierUseCaseImpl implements UpdateSupplierUseCase {
  private readonly supplierRepository: SupplierRepository;
  
  constructor(supplierRepository: SupplierRepository) {
    this.supplierRepository = supplierRepository;
  }

  updateSupplier(supplier: SupplierModel): Observable<SupplierModel> {
    return this.supplierRepository.update(supplier);
  }
}