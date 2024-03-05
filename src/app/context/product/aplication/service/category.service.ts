import { Observable } from 'rxjs';
import { CategoryModel } from '../../domain/models/category.model';
import { ListCategoryUseCase } from '../../domain/ports/in/list.category.use.case';
import { SaveCategoryUseCase } from '../../domain/ports/in/save.category.use.case';

export class CategoryService implements  ListCategoryUseCase, SaveCategoryUseCase{
    
    constructor(

        private listCategoryUseCase: ListCategoryUseCase,
        private SaveCategoryUseCase: SaveCategoryUseCase
      ) {}
  

    listCategorys(): Observable<CategoryModel[]> {
      return this.listCategoryUseCase.listCategorys();
    }

    saveCategory(category: CategoryModel): Observable<CategoryModel> {
      return this.SaveCategoryUseCase.saveCategory(category);
  }
}