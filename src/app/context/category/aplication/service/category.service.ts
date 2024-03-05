import { Observable } from 'rxjs';
import { CategoryModel } from '../../domain/models/category.model';
import { ListCategoryUseCase } from '../../domain/ports/in/list.category.use.case';

export class CategoryService implements  ListCategoryUseCase {
    
    constructor(

        private listCategoryUseCase: ListCategoryUseCase
      ) {}
  

    listCategories(): Observable<CategoryModel[]> {
      return this.listCategoryUseCase.listCategories();
    }
}