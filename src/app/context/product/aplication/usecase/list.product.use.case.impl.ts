import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { ListProductUseCase } from '../../domain/ports/in/list.product.use.case'; 
import { ProductRepository } from '../../domain/ports/out/product.repository';

export class ListProductUseCaseImpl implements ListProductUseCase {

  private readonly productRepository: ProductRepository;
  
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  findById(productId: number): Observable<ProductModel | null> {
    return this.productRepository.findById(productId);
  }

  listProducts(): Observable<ProductModel[]> {
    return this.productRepository.findAll();
  }

}