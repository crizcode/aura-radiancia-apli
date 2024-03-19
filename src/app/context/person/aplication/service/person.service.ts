import { Observable } from 'rxjs';
import { PersonModel } from '../../domain/models/person.model';
import { ListPersonUseCase } from '../../domain/ports/in/list.person.use.case';
import { CreatePersonUseCase } from '../../domain/ports/in/create.person.use.case';
import { UpdatePersonUseCase } from '../../domain/ports/in/update.person.use.case';
import { DeletePersonUseCase } from '../../domain/ports/in/detele.person.use.case';
import { LoginPersonUseCase } from '../../domain/ports/in/login.person.use.case';

export class PersonService implements
LoginPersonUseCase,
ListPersonUseCase,
CreatePersonUseCase,
UpdatePersonUseCase,
DeletePersonUseCase {

constructor(
  private loginPersonUseCase: LoginPersonUseCase,
  private listPersonUseCase: ListPersonUseCase,
  private createPersonUseCase: CreatePersonUseCase,
  private updatePersonUseCase: UpdatePersonUseCase,
  private deletePersonUseCase: DeletePersonUseCase
) {}

login(userName: string, password: string): Observable<any> {
  return this.loginPersonUseCase.login(userName, password);
}

listPeople(): Observable<PersonModel[]> {
  return this.listPersonUseCase.listPeople();
}

createPerson(person: PersonModel): Observable<PersonModel> {
  return this.createPersonUseCase.createPerson(person);
}

findById(personId: number): Observable<PersonModel | null> { // Corregido el tipo de retorno a Observable<PersonModel | null>
  return this.listPersonUseCase.findById(personId);
}


updatePerson(person: PersonModel): Observable<PersonModel> {
  return this.updatePersonUseCase.updatePerson(person);
}

deletePerson(personId: number): Observable<void> {
  return this.deletePersonUseCase.deletePerson(personId);
}
}