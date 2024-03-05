import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';

export interface CategoryRepository {
  findById(id: number): Observable<CategoryModel | null>;
  findAll(): Observable<CategoryModel[]>;
}