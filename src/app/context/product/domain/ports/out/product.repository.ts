import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';

export interface ProductRepository {
  
  findAll(): Observable<ProductModel[]>;
  findById(productId: number): Observable<ProductModel>; 
  create(product: ProductModel): Observable<ProductModel>;
  update(product: ProductModel): Observable<ProductModel>;
  deleteById(id: number): Observable<void>; 
}