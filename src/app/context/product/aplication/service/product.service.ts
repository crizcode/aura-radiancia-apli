import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { ListProductUseCase } from '../../domain/ports/in/list.product.use.case';
import { SaveProductUseCase } from '../../domain/ports/in/save.product.use.case';

export class ProductService implements  ListProductUseCase, SaveProductUseCase{
    
    constructor(

        private listProductUseCase: ListProductUseCase,
        private SaveProductUseCase: SaveProductUseCase
      ) {}
  

    listProducts(): Observable<ProductModel[]> {
      return this.listProductUseCase.listProducts();
    }

    saveProduct(product: ProductModel): Observable<ProductModel> {
      return this.SaveProductUseCase.saveProduct(product);
  }
}