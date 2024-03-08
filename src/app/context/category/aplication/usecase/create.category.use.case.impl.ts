import { Observable } from 'rxjs';
import { CategoryModel } from '../../domain/models/category.model';
import { CategoryRepository } from '../../domain/ports/out/category.repository';
import { CreateCategoryUseCase } from '../../domain/ports/in/create.category.use.case';

export class CreateCategoryUseCaseImpl implements CreateCategoryUseCase {
  
  private readonly categoryRepository: CategoryRepository;
  
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  createCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.categoryRepository.create(category);
  }
}