import { Injectable } from '@angular/core';
import { PersonAdapterService } from '../adapters/person.adapter.service';

@Injectable({
  providedIn: 'root',
})
export class PersonController {
  constructor(private personAdapterService: PersonAdapterService) {} // Corregido el nombre del parámetro
}