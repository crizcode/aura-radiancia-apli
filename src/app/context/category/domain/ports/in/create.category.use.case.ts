import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';

export interface CreateCategoryUseCase {
  createCategory(category: CategoryModel): Observable<CategoryModel>;
}