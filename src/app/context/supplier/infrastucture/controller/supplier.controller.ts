import { Injectable } from "@angular/core";
import { SupplierAdapterService } from "../adapters/supplier.adapter.service";



@Injectable({
  providedIn: 'root',
})
export class SupplierController {
  constructor(private supplierAdapterService: SupplierAdapterService) {} // Corregido el nombre del parámetro
}