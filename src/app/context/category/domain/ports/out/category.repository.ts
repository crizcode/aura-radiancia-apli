import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';

export interface CategoryRepository {
  
  findAll(): Observable<CategoryModel[]>;
  findById(categoryId: number): Observable<CategoryModel>; 
  create(category: CategoryModel): Observable<CategoryModel>;
  update(category: CategoryModel): Observable<CategoryModel>;
  deleteById(id: number): Observable<void>; 
}