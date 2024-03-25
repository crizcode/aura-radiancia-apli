import { Observable } from 'rxjs';

export interface AuthRepository {

  login(userName: string, password: string): Observable<any>;
  
  renewToken(refreshToken: string): Observable<any>;
  
}