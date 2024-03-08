import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';

export interface CreateProductUseCase {
  createProduct(product: ProductModel): Observable<ProductModel>;
}