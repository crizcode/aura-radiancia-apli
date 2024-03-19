import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularAdapterService } from 'src/app/context/commons/services/angular-adapter.service';
import { ProductModel } from 'src/app/context/product/domain/models/product.model';
import { ProductAdapterService } from 'src/app/context/product/infrastucture/adapters/product.adapter.service';
import { DialogAddProductComponent } from '../add-product/dialog-add-product.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditarProductComponent } from '../editar-product/dialog-editar-product.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { ConfirmDialogComponent } from 'src/app/home/components/confirm-dialog/confirm-dialog.component';


@Component({
  templateUrl: './product.component.html',
})
export default class ProductComponent implements OnInit {
  
  products: ProductModel[] = [];
  dataSource = new MatTableDataSource<ProductModel>();
  columnsToDisplay: string[] = ['id', 'name', 'descripcion', 'precio', 'stock', 'creationDate', 'categoryName', 'supplierName', 'acciones'];
  value = '';

  constructor(
    private productService: ProductAdapterService,
    private angularService: AngularAdapterService,
    public dialog: MatDialog,                //dialog
    private _liveAnnouncer: LiveAnnouncer,  // sort
  ) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  applyFilter(event: Event) {
    const target = (event.target as HTMLInputElement);
    if (target) {
      const filterValue = target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  clearFilter() {
    this.value = '';
    this.dataSource.filter = ''; // Limpiar el filtro directamente
    this.listarProductos();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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

  confirmDeleteProducto(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: '¿Estás seguro de que deseas eliminar este producto?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si el usuario confirmó, eliminamos el producto
        this.productService.deleteById(id).subscribe({
          next: () => {
            //console.log('Producto eliminado correctamente');
            this.listarProductos();
          },
          error: (error) => {
            console.error('Error al eliminar producto:', error);
          },
          complete: () => {
            //console.log('La solicitud de eliminación se completó correctamente.');
          }
        });
      } else {
        // Si el usuario canceló, mostramos un mensaje en la consola
        //console.log('Eliminación de producto cancelada por el usuario');
      }
    });
  }



}
