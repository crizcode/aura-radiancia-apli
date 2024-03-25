import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer llamadas HTTP
import { AuthRepository } from '../../domain/ports/out/auth.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthAdapterService implements AuthRepository {
  private apiUrl = 'https://localhost:7159/api/v1/auth'; // URL de tu API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  login(username: string, pass: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, { username, pass });
  }

  renewToken(refreshToken: string): Observable<any> {
    // Envía el refreshToken como una cadena simple en el cuerpo de la solicitud
    const requestBody = `"${refreshToken}"`;
    
    return this.http.post<any>(`${this.apiUrl}/renew`, requestBody, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}