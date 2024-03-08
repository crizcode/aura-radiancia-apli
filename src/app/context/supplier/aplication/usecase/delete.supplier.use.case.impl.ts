import { Observable } from 'rxjs';
import { SupplierRepository } from '../../domain/ports/out/supplier.repository';
import { DeleteSupplierUseCase } from '../../domain/ports/in/detele.supplier.use.case';


export class DeleteSupplierUseCaseImpl implements DeleteSupplierUseCase {
  private readonly supplierRepository: SupplierRepository;
  
  constructor(supplierRepository: SupplierRepository) {
    this.supplierRepository = supplierRepository;
  }

  deleteSupplier(id: number): Observable<void> {
    return this.supplierRepository.deleteById(id);
  }

}