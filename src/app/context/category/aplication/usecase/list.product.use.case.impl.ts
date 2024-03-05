import { Observable } from 'rxjs';
import { CategoryModel } from '../../domain/models/category.model';
import { ListCategoryUseCase } from '../../domain/ports/in/list.category.use.case'; 
import { CategoryRepository } from '../../domain/ports/out/category.repository';

export class ListCategoryUseCaseImpl implements ListCategoryUseCase {

  private readonly CategoryRepository: CategoryRepository;
  
  constructor(CategoryRepository: CategoryRepository) {
    this.CategoryRepository = CategoryRepository;
  }

  listCategories(): Observable<CategoryModel[]> {
    return this.CategoryRepository.findAll();
  }

  getCategoryById(id: number): Observable<CategoryModel | null> {
    return this.CategoryRepository.findById(id);
  }
}
