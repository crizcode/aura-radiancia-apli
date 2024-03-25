import { Observable } from 'rxjs';
import { PersonModel } from '../../models/person.model';

export interface PersonRepository {
  
  findAll(): Observable<PersonModel[]>;
  findById(personId: number): Observable<PersonModel>; 
  create(person: PersonModel): Observable<PersonModel>;
  update(person: PersonModel): Observable<PersonModel>;
  deleteById(id: number): Observable<void>; 
}