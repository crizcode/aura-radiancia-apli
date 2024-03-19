import { Observable } from 'rxjs';
import { PersonModel } from '../../domain/models/person.model';
import { PersonRepository } from '../../domain/ports/out/person.repository';
import { UpdatePersonUseCase } from '../../domain/ports/in/update.person.use.case';

export class UpdatePersonUseCaseImpl implements UpdatePersonUseCase {
  private readonly personRepository: PersonRepository;
  
  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  updatePerson(person: PersonModel): Observable<PersonModel> {
    return this.personRepository.update(person);
  }
}