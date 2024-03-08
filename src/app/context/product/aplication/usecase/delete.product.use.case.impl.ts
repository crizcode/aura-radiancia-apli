import { Observable } from 'rxjs';
import { ProductRepository } from '../../domain/ports/out/product.repository';
import { DeleteProductUseCase } from '../../domain/ports/in/detele.product.use.case';


export class DeleteProductUseCaseImpl implements DeleteProductUseCase {
  private readonly productRepository: ProductRepository;
  
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  deleteProduct(id: number): Observable<void> {
    return this.productRepository.deleteById(id);
  }

}