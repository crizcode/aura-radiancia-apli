import { Observable } from 'rxjs';
import { PersonRepository } from '../../domain/ports/out/person.repository';
import { DeletePersonUseCase } from '../../domain/ports/in/detele.person.use.case';


export class DeletePersonUseCaseImpl implements DeletePersonUseCase {
  private readonly personRepository: PersonRepository;
  
  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  deletePerson(id: number): Observable<void> {
    return this.personRepository.deleteById(id);
  }

}