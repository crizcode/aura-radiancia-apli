import { Observable } from 'rxjs';
import { CategoryRepository } from '../../domain/ports/out/category.repository';
import { DeleteCategoryUseCase } from '../../domain/ports/in/detele.category.use.case';


export class DeleteCategoryUseCaseImpl implements DeleteCategoryUseCase {
  private readonly categoryRepository: CategoryRepository;
  
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  deleteCategory(id: number): Observable<void> {
    return this.categoryRepository.deleteById(id);
  }

}