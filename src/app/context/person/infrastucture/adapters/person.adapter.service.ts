import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../../domain/models/person.model';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer llamadas HTTP
import { PersonRepository } from '../../domain/ports/out/person.repository';

@Injectable({
  providedIn: 'root',
})
export class PersonAdapterService implements PersonRepository {
  private apiUrl = 'https://localhost:7159/api/v1/person'; // URL de tu API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  login(username: string, pass: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, { username, pass });
  }

  findById(personId: number): Observable<PersonModel> { // Cambiado el tipo de personId a number
    return this.http.get<PersonModel>(`${this.apiUrl}/list/${personId}`);
  }

  create(person: PersonModel): Observable<PersonModel> {
    return this.http.post<PersonModel>(`${this.apiUrl}/save`, person);
  }

  update(person: PersonModel): Observable<PersonModel> {
    return this.http.put<PersonModel>(`${this.apiUrl}/update/${person.id}`, person);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  findAll(): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>(`${this.apiUrl}/list`);
  }
}