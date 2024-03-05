import { Observable } from 'rxjs';
import { SupplierModel } from '../../domain/models/supplier.model';
import { ListSupplierUseCase } from '../../domain/ports/in/list.supplier.use.case'; 
import { SupplierRepository } from '../../domain/ports/out/supplier.repository';

export class ListSupplierUseCaseImpl implements ListSupplierUseCase {

  private readonly SupplierRepository: SupplierRepository;
  
  constructor(SupplierRepository: SupplierRepository) {
    this.SupplierRepository = SupplierRepository;
  }

  listSuppliers(): Observable<SupplierModel[]> {
    return this.SupplierRepository.findAll();
  }

  getSupplierById(id: number): Observable<SupplierModel | null> {
    return this.SupplierRepository.findById(id);
  }
}
