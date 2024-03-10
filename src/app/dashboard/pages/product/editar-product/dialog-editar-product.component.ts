import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, forkJoin, throwError } from 'rxjs';
import { CategoryModel } from 'src/app/context/category/domain/models/category.model';
import { CategoryAdapterService } from 'src/app/context/category/infrastucture/adapters/category.adapter.service';
import { ProductModel } from 'src/app/context/product/domain/models/product.model';
import { ProductAdapterService } from 'src/app/context/product/infrastucture/adapters/product.adapter.service';
import { SupplierModel } from 'src/app/context/supplier/domain/models/supplier.model';
import { SupplierAdapterService } from 'src/app/context/supplier/infrastucture/adapters/supplier.adapter.service';

@Component({
  selector: 'app-editar-product',
  templateUrl: './dialog-editar-product.component.html',
  styleUrls: ['./dialog-editar-product.component.css']
})

export class DialogEditarProductComponent implements OnInit {
  product: ProductModel = {} as ProductModel;
  categories: CategoryModel[] = [];
  suppliers: SupplierModel[] = [];
  loaded: boolean = false; // Flag para indicar si los datos se han cargado

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { productId: number },
    private dialogRef: MatDialogRef<DialogEditarProductComponent>,
    private productService: ProductAdapterService,
    private categoryService: CategoryAdapterService,
    private supplierService: SupplierAdapterService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const productId = this.data.productId;
    forkJoin({
      product: this.productService.findById(productId),
      categories: this.categoryService.findAll(),
      suppliers: this.supplierService.findAll()
    }).pipe(
      catchError(error => {
        console.error('Error al obtener los datos:', error);
        return throwError(error);
      })
    ).subscribe(({ product, categories, suppliers }) => {
      if (!product) {
        console.error('No se encontró el producto');
        return;
      }
      this.product = product;
      this.categories = categories;
      this.suppliers = suppliers;
      this.loaded = true;
    });
  }

  updateProducto(): void {
    // Lógica para actualizar el producto aquí

    // Cerrar el diálogo después de actualizar
    this.dialogRef.close();
  }
}