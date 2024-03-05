import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';

export interface ListCategoryUseCase {
  listCategories(): Observable<CategoryModel[]>;
}