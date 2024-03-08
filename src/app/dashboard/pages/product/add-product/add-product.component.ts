import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/context/category/domain/models/category.model';
import { CategoryAdapterService } from 'src/app/context/category/infrastucture/adapters/category.adapter.service';
import { AngularAdapterService } from 'src/app/context/commons/services/angular-adapter.service';
import { ProductAdapterService } from 'src/app/context/product/infrastucture/adapters/product.adapter.service';
import { SupplierModel } from 'src/app/context/supplier/domain/models/supplier.model';
import { SupplierAdapterService } from 'src/app/context/supplier/infrastucture/adapters/supplier.adapter.service';


@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories: CategoryModel[] = [];
  suppliers: SupplierModel[] = [];
selectedCategoryId: number | undefined;

  constructor(
    private productService: ProductAdapterService,
    private categoryService: CategoryAdapterService,
    private supplierService: SupplierAdapterService,
    private angularService: AngularAdapterService,
) { }


  ngOnInit(): void {
    this.loadCategories(); 
    this.loadSuppliers(); 
    
  }



getSystemDate(): string {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  return formattedDate;
}



  // retornar a productos

  mostrarProducto(): void {
    this.angularService.navigateTo('/dashboard/productos');
}


  // Método para cargar las categorías
  loadCategories(): void {
    this.categoryService.findAll().subscribe(
      (categories: CategoryModel[]) => {
        this.categories = categories;
        
      }
    );
  }

  // Método para cargar los proveedores
  loadSuppliers(): void {
    this.supplierService.findAll().subscribe(
      (suppliers: SupplierModel[]) => {
        this.suppliers = suppliers;
      }
    );
  }


}
