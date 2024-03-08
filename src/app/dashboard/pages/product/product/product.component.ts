
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularAdapterService } from 'src/app/context/commons/services/angular-adapter.service';
import { ProductModel } from 'src/app/context/product/domain/models/product.model';
import { ProductAdapterService } from 'src/app/context/product/infrastucture/adapters/product.adapter.service';



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
    private angularService: AngularAdapterService
  ) { }

  ngOnInit(): void {
    this.listarProductos();
  }


  // navegar a crear
  crearProducto(): void {
    this.angularService.navigateTo('/dashboard/addproduct');
}


listarProductos(): void {
  this.productService.findAll()
    .subscribe(products => {
      this.products = products;
      this.dataSource.data = products;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.angularService.handleHttpError(error); // Utilizando el método de manejo de errores centralizado
    });
}
  // navegar a editar
  editarProducto(productId: number): void {
    this.angularService.navigateTo(`/dashboard/editarProducto/${productId}`);
  }

  
  // eliminar producto

  eliminarProducto(id: number): void {

    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el producto con ID: ${id}?`);
    
    if (confirmacion) {
        // llamamos al servicio para eliminar el producto
        this.productService.deleteById(id).subscribe(() => {
            console.log('Producto eliminado correctamente');
            
        }, error => {
            console.error('Error al eliminar producto:', error);
           
        });
    } else {

        console.log('Eliminación de producto cancelada por el usuario');
    }
  }

}