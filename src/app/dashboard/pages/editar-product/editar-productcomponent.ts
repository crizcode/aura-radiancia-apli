import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute y Router
import { CategoryModel } from 'src/app/context/category/domain/models/category.model';
import { CategoryAdapterService } from 'src/app/context/category/infrastucture/adapters/category.adapter.service';
import { ProductModel } from 'src/app/context/product/domain/models/product.model';
import { ProductAdapterService } from 'src/app/context/product/infrastucture/adapters/product.adapter.service';
import { SupplierModel } from 'src/app/context/supplier/domain/models/supplier.model';
import { SupplierAdapterService } from 'src/app/context/supplier/infrastucture/adapters/supplier.adapter.service';

@Component({
  selector: 'app-editar-product',
  templateUrl: './editar-product.component.html',
  styleUrls: ['./editar-product.component.css']
})
export class EditarProductComponent implements OnInit {

  product: ProductModel[] = []; // Declarar explícitamente el tipo de product como un array de ProductModel

  categories: CategoryModel[] = [];
  suppliers: SupplierModel[] = [];

  constructor(
    private productService: ProductAdapterService,
    private categoryService: CategoryAdapterService,
    private supplierService: SupplierAdapterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = Number(params['productId']);
      if (!isNaN(productId)) {
        this.productService.findById(productId).subscribe({
          next: (product) => {
            if (product) {
              this.product.push(product);
            } else {
              console.error('No se encontró el producto');
            }
          },
          error: (error) => {
            console.error('Error al obtener el producto:', error);
          }
        });
      } else {
        console.error('ID de producto no válido');
      }
    });

    this.categoryService.findAll().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error al obtener las categorías:', error);
      }
    });

    this.supplierService.findAll().subscribe({
      next: (suppliers) => {
        this.suppliers = suppliers;
      },
      error: (error) => {
        console.error('Error al obtener los proveedores:', error);
      }
    });
  }

  updateProduct(): void {
    if (this.product.length > 0) {
      this.productService.update(this.product[0]).subscribe(updatedProduct => {
        console.log('Producto actualizado:', updatedProduct);
        this.router.navigate(['/dashboard/productos']); 
      }, error => {
        console.error('Error al actualizar el producto:', error);
      });
    } else {
      console.error('No hay ningún producto para actualizar');
    }
  }
}