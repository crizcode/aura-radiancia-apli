// controller/user/user.controller.ts
import { Injectable } from '@angular/core';
import { ProductAdapterService } from '../adapters/product.adapter.service';

@Injectable({
  providedIn: 'root',
})
export class ProductController {
  constructor(private productAdapterService: ProductAdapterService) {} // Corregido el nombre del parámetro
}