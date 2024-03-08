import { Observable } from 'rxjs';

export interface DeleteCategoryUseCase {
  deleteCategory(categoryId: number): Observable<void>;
}