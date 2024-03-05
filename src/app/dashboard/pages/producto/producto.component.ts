import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/context/product/domain/models/product.model';
import { ProductAdapterService } from 'src/app/context/product/infrastucture/adapters/product.adapter.service';



@Component({
  templateUrl: './producto.component.html',
  
})
export default class ProductoComponent implements OnInit {
  products: ProductModel[] = [];
  dataSource = new MatTableDataSource<ProductModel>();
  columnsToDisplay: string[] = ['id', 'nombre', 'descripcion', 'precio', 'cantidad', 'fecha','categoria','proveedor', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private productService: ProductAdapterService,// Inyecta MatDialog en el constructor
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.findAll()
      .subscribe(products => {
        console.log('Datos recibidos:', products); // Imprimir los datos en la consola
        this.products = products;
        this.dataSource.data = products;
        this.dataSource.paginator = this.paginator;
      }, error => {
        console.error('Error al obtener los datos:', error); // Imprimir el error en la consola
      });
  }


   // navegar a detail
   editarProducto(productId: number) {
    this.router.navigate(['/dashboard/editarProducto',productId]);
  }


  eliminarProducto(id: number): void {
    // Implementa aquí la lógica para eliminar el producto por su ID
    console.log('Eliminando producto con ID:', id);

    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el producto con ID: ${id}?`);
    
    if (confirmacion) {
        // Si el usuario confirma la eliminación, llamamos al servicio para eliminar el producto
        this.productService.deleteById(id).subscribe(() => {
            console.log('Producto eliminado correctamente');
            // Aquí puedes realizar cualquier otra lógica después de eliminar el producto, si es necesario
        }, error => {
            console.error('Error al eliminar producto:', error);
            // Maneja el error aquí si es necesario
        });
    } else {
        // Si el usuario cancela la eliminación, no hacemos nada
        console.log('Eliminación de producto cancelada por el usuario');
    }
}
}