import { Observable } from 'rxjs';
import { PersonModel } from '../../models/person.model';

export interface ListPersonUseCase {

  listPeople(): Observable<PersonModel[]>;
  findById(personId: number): Observable<PersonModel | null>;
  
}