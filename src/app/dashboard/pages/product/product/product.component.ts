import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularAdapterService } from 'src/app/context/commons/services/angular-adapter.service';
import { ProductModel } from 'src/app/context/product/domain/models/product.model';
import { ProductAdapterService } from 'src/app/context/product/infrastucture/adapters/product.adapter.service';
import { DialogAddProductComponent } from '../add-product/dialog-add-product.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditarProductComponent } from '../editar-product/dialog-editar-product.component';

@Component({
  templateUrl: './product.component.html',
})
export default class ProductComponent implements OnInit {
  products: ProductModel[] = [];
  dataSource = new MatTableDataSource<ProductModel>();
  columnsToDisplay: string[] = ['id', 'nombre', 'descripcion', 'precio', 'cantidad', 'fecha', 'categoria', 'proveedor', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private productService: ProductAdapterService,
    private angularService: AngularAdapterService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  dialogAddProducto() {
    const dialogRef = this.dialog.open(DialogAddProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.listarProductos();
      }
    });
  }

  listarProductos(): void {
    this.productService.findAll().subscribe(products => {
      this.products = products;
      this.dataSource.data = products;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.angularService.handleHttpError(error);
    });
  }

  // Navegar a editar
  dialogEditarProducto(productId: number): void {
    const dialogRef = this.dialog.open(DialogEditarProductComponent, {
      data: { productId: productId }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.listarProductos();
      }
    });
  }

  // Eliminar producto
  eliminarProducto(id: number): void {
    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el producto con ID: ${id}?`);

    if (confirmacion) {
      this.productService.deleteById(id).subscribe({
        next: () => {
          console.log('Producto eliminado correctamente');
          this.listarProductos();
        },
        error: (error) => {
          console.error('Error al eliminar producto:', error);
        },
        complete: () => {
          console.log('La solicitud de eliminación se completó correctamente.');
        }
      });
    } else {
      console.log('Eliminación de producto cancelada por el usuario');
    }
  }
}
