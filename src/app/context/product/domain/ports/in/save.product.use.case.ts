import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';

export interface SaveProductUseCase {
  saveProduct(product: ProductModel): Observable<ProductModel>;
}