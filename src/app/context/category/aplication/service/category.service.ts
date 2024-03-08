import { Observable } from 'rxjs';
import { CategoryModel } from '../../domain/models/category.model';
import { ListCategoryUseCase } from '../../domain/ports/in/list.category.use.case';
import { CreateCategoryUseCase } from '../../domain/ports/in/create.category.use.case';
import { UpdateCategoryUseCase } from '../../domain/ports/in/update.category.use.case';
import { DeleteCategoryUseCase } from '../../domain/ports/in/detele.category.use.case';

export class CategoryService implements
ListCategoryUseCase,
CreateCategoryUseCase,
UpdateCategoryUseCase,
DeleteCategoryUseCase {

constructor(
  private listCategoryUseCase: ListCategoryUseCase,
  private createCategoryUseCase: CreateCategoryUseCase,
  private updateCategoryUseCase: UpdateCategoryUseCase,
  private deleteCategoryUseCase: DeleteCategoryUseCase
) {}

listCategories(): Observable<CategoryModel[]> {
  return this.listCategoryUseCase.listCategories();
}

createCategory(category: CategoryModel): Observable<CategoryModel> {
  return this.createCategoryUseCase.createCategory(category);
}

findById(categoryId: number): Observable<CategoryModel | null> { // Corregido el tipo de retorno a Observable<CategoryModel | null>
  return this.listCategoryUseCase.findById(categoryId);
}


updateCategory(category: CategoryModel): Observable<CategoryModel> {
  return this.updateCategoryUseCase.updateCategory(category);
}

deleteCategory(categoryId: number): Observable<void> {
  return this.deleteCategoryUseCase.deleteCategory(categoryId);
}
}