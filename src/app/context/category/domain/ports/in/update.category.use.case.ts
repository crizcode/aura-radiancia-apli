import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';

export interface UpdateCategoryUseCase {
  updateCategory(category: CategoryModel): Observable<CategoryModel>;
}