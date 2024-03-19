import { Observable } from 'rxjs';
import { PersonModel } from '../../models/person.model';


export interface CreatePersonUseCase {
  createPerson(person: PersonModel): Observable<PersonModel>;
}