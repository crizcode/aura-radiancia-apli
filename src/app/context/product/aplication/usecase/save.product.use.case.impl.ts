import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { SaveProductUseCase } from '../../domain/ports/in/save.product.use.case'; 
import { ProductRepository } from '../../domain/ports/out/product.repository';


export class SaveProductUseCaseImpl implements SaveProductUseCase {

  private readonly productRepository: ProductRepository;
  
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  saveProduct(product: ProductModel): Observable<ProductModel> {
    return this.productRepository.save(product);
  } 
}