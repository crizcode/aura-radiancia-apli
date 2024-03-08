import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';

export interface ListProductUseCase {

  listProducts(): Observable<ProductModel[]>;
  findById(productId: number): Observable<ProductModel | null>;
  
}