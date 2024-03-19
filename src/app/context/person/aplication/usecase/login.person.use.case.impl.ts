import { Observable } from 'rxjs';
import { PersonRepository } from '../../domain/ports/out/person.repository';
import { LoginPersonUseCase } from '../../domain/ports/in/login.person.use.case';


export class LoginUseCaseImpl implements LoginPersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  login(userName: string, password: string): Observable<any> {
    return this.personRepository.login(userName, password);
  }
}