import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';

export interface UpdateProductUseCase {
  updateProduct(product: ProductModel): Observable<ProductModel>;
}