import { Observable } from 'rxjs';

export interface DeletePersonUseCase {
  deletePerson(categoryId: number): Observable<void>;
}