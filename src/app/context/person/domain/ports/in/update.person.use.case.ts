import { Observable } from 'rxjs';
import { PersonModel } from '../../models/person.model';

export interface UpdatePersonUseCase {
  updatePerson(person: PersonModel): Observable<PersonModel>;
}