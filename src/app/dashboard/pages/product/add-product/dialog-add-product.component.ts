import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/context/category/domain/models/category.model';
import { CategoryAdapterService } from 'src/app/context/category/infrastucture/adapters/category.adapter.service';
import { ProductAdapterService } from 'src/app/context/product/infrastucture/adapters/product.adapter.service';
import { SupplierModel } from 'src/app/context/supplier/domain/models/supplier.model';
import { SupplierAdapterService } from 'src/app/context/supplier/infrastucture/adapters/supplier.adapter.service';


@Component({
  selector: 'app-add-product-component',
  templateUrl: './dialog-add-product.component.html',
  styleUrls: ['./dialog-add-product.component.css']
})

export class DialogAddProductComponent implements OnInit {

  @Output() productAdded: EventEmitter<any> = new EventEmitter();

  categories: CategoryModel[] = [];
  suppliers: SupplierModel[] = [];
  productData = {
    name: '',
    descripcion: '',
    precio: null,
    stock: null,
    categoryId: 0,
    supplierId: 0
  };

  constructor(
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
    private productService: ProductAdapterService,
    private categoryService: CategoryAdapterService,
    private supplierService: SupplierAdapterService,
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadSuppliers();
  }

  crearProducto(): void {
    if (!this.isValidProductData()) {
      console.error('Por favor, complete todos los campos.');
      return;
    }

    this.productService.create(this.productData).subscribe({
      next: (response) => {
        console.log('Producto creado:', response);
        this.dialogRef.close('success');
      },
      error: (error) => {
        console.error('Error al crear el producto:', error);
      }
    });
  }

  isValidProductData(): boolean {
    return (
      this.productData.name.trim() !== '' &&
      this.productData.descripcion.trim() !== '' &&
      this.productData.precio !== null &&
      this.productData.stock !== null &&
      this.productData.categoryId !== 0 &&
      this.productData.supplierId !== 0
    );
  }

  loadCategories(): void {
    this.categoryService.findAll().subscribe((categories: CategoryModel[]) => {
      this.categories = categories;
    });
  }

  loadSuppliers(): void {
    this.supplierService.findAll().subscribe((suppliers: SupplierModel[]) => {
      this.suppliers = suppliers;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
