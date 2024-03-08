import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { ProductRepository } from '../../domain/ports/out/product.repository';
import { CreateProductUseCase } from '../../domain/ports/in/create.product.use.case';

export class CreateProductUseCaseImpl implements CreateProductUseCase {
  
  private readonly productRepository: ProductRepository;
  
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.productRepository.create(product);
  }
}