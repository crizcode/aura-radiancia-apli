import { Observable } from 'rxjs';
import { CategoryModel } from '../../domain/models/category.model';
import { CategoryRepository } from '../../domain/ports/out/category.repository';
import { UpdateCategoryUseCase } from '../../domain/ports/in/update.category.use.case';

export class UpdateCategoryUseCaseImpl implements UpdateCategoryUseCase {
  private readonly categoryRepository: CategoryRepository;
  
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  updateCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.categoryRepository.update(category);
  }
}