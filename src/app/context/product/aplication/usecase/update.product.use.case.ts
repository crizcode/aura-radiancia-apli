import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { ProductRepository } from '../../domain/ports/out/product.repository';
import { UpdateProductUseCase } from '../../domain/ports/in/update.product.use.case';

export class UpdateProductUseCaseImpl implements UpdateProductUseCase {
  private readonly productRepository: ProductRepository;
  
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.productRepository.update(product);
  }
}