import { Observable } from 'rxjs';
import { PersonModel } from '../../domain/models/person.model';
import { PersonRepository } from '../../domain/ports/out/person.repository';
import { CreatePersonUseCase } from '../../domain/ports/in/create.person.use.case';

export class CreatePersonUseCaseImpl implements CreatePersonUseCase {
  
  private readonly personRepository: PersonRepository;
  
  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  createPerson(person: PersonModel): Observable<PersonModel> {
    return this.personRepository.create(person);
  }
}