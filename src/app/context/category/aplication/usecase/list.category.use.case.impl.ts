import { Observable } from 'rxjs';
import { CategoryModel } from '../../domain/models/category.model';
import { ListCategoryUseCase } from '../../domain/ports/in/list.category.use.case'; 
import { CategoryRepository } from '../../domain/ports/out/category.repository';

export class ListCategoryUseCaseImpl implements ListCategoryUseCase {

  private readonly categoryRepository: CategoryRepository;
  
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  findById(categoryId: number): Observable<CategoryModel | null> {
    return this.categoryRepository.findById(categoryId);
  }

  listCategories(): Observable<CategoryModel[]> {
    return this.categoryRepository.findAll();
  }

}