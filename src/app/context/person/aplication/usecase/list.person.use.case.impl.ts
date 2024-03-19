import { Observable } from 'rxjs';
import { PersonModel } from '../../domain/models/person.model';
import { ListPersonUseCase } from '../../domain/ports/in/list.person.use.case'; 
import { PersonRepository } from '../../domain/ports/out/person.repository';

export class ListPersonUseCaseImpl implements ListPersonUseCase {

  private readonly personRepository: PersonRepository;
  
  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  findById(personId: number): Observable<PersonModel | null> {
    return this.personRepository.findById(personId);
  }

  listPeople(): Observable<PersonModel[]> {
    return this.personRepository.findAll();
  }

}