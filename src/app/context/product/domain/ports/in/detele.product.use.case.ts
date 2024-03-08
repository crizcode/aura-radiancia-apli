import { Observable } from 'rxjs';

export interface DeleteProductUseCase {
  deleteProduct(productId: number): Observable<void>;
}