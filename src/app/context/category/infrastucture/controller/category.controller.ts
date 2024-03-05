// controller/user/user.controller.ts
import { Injectable } from '@angular/core';
import { CategoryAdapterService } from '../adapters/category.adapter.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryController {
  constructor(private categoryAdapterService: CategoryAdapterService) {} // Corregido el nombre del parámetro
}