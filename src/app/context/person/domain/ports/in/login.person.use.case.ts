import { Observable } from 'rxjs';

export interface LoginPersonUseCase {
  login(userName: string, password: string): Observable<any>;
}