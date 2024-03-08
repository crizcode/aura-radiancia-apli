
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularAdapterService } from 'src/app/context/commons/services/angular-adapter.service';
import { CategoryModel } from 'src/app/context/category/domain/models/category.model';
import { CategoryAdapterService } from 'src/app/context/category/infrastucture/adapters/category.adapter.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddCategoryComponent } from '../dialog-add-category/dialog-add-category.component';
import { DialogEditCategoryComponent } from '../dialog-edit-category/dialog-edit-category.component';



@Component({
  templateUrl: './category.component.html',

})
export default class CategoryComponent implements OnInit {
  categories: CategoryModel[] = [];
  dataSource = new MatTableDataSource<CategoryModel>();
  columnsToDisplay: string[] = ['id', 'nombre', 'estado', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private categoryService: CategoryAdapterService,
    private angularService: AngularAdapterService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listarCategorias();
  }


  dialogAddProduct() {
    this.dialog.open(DialogAddCategoryComponent);
}

dialogEditProduct() {
  this.dialog.open(DialogEditCategoryComponent);
}



listarCategorias(): void {
  this.categoryService.findAll()
    .subscribe(categorys => {
      this.categories = categorys;
      this.dataSource.data = categorys;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.angularService.handleHttpError(error); // Utilizando el método de manejo de errores centralizado
    });
}




  // eliminar categoria

  eliminarCategoria(id: number): void {

    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el categoryo con ID: ${id}?`);
    
    if (confirmacion) {
        // llamamos al servicio para eliminar el categoryo
        this.categoryService.deleteById(id).subscribe(() => {
            console.log('Categoryo eliminado correctamente');
            
        }, error => {
            console.error('Error al eliminar categoryo:', error);
           
        });
    } else {

        console.log('Eliminación de categoryo cancelada por el usuario');
    }
  }


  editarCategoria(){

  }
}