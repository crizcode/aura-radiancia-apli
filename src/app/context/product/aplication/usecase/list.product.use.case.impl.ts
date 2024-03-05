import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { ListProductUseCase } from '../../domain/ports/in/list.product.use.case'; 
import { ProductRepository } from '../../domain/ports/out/product.repository';

export class ListProductUseCaseImpl implements ListProductUseCase {

  private readonly ProductRepository: ProductRepository;
  
  constructor(ProductRepository: ProductRepository) {
    this.ProductRepository = ProductRepository;
  }

  listProducts(): Observable<ProductModel[]> {
    return this.ProductRepository.findAll();
  }

  getProductById(id: number): Observable<ProductModel | null> {
    return this.ProductRepository.findById(id);
  }
}
