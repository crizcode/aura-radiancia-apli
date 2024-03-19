import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularAdapterService } from 'src/app/context/commons/services/angular-adapter.service';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { ConfirmDialogComponent } from 'src/app/home/components/confirm-dialog/confirm-dialog.component';
import { CategoryModel } from 'src/app/context/category/domain/models/category.model';
import { CategoryAdapterService } from 'src/app/context/category/infrastucture/adapters/category.adapter.service';
import { DialogAddCategoryComponent } from '../add-category/dialog-add-category.component';
import { DialogEditarCategoryComponent } from '../editar-category/dialog-editar-category.component';


@Component({
  templateUrl: './category.component.html',
})
export default class CategoryComponent implements OnInit {
  
  categories: CategoryModel[] = [];
  dataSource = new MatTableDataSource<CategoryModel>();
  columnsToDisplay: string[] = ['categoryId', 'name', 'estado', 'acciones'];
  value = '';

  constructor(
    private categoryService: CategoryAdapterService,
    private angularService: AngularAdapterService,
    public dialog: MatDialog,               
    private _liveAnnouncer: LiveAnnouncer,
  ) { }

  ngOnInit(): void {
    this.listarCategorias();
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
    this.dataSource.filter = '';
    this.listarCategorias();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }



  dialogAddCategoria() {
    const dialogRef = this.dialog.open(DialogAddCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.listarCategorias();
      }
    });
  }
  

  listarCategorias(): void {
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories;
      this.dataSource.data = categories;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.angularService.handleHttpError(error);
    });
  }

  // Navegar a editar
  dialogEditarCategoria(categoryId: number): void {
    const dialogRef = this.dialog.open(DialogEditarCategoryComponent, {
      data: { categoryId: categoryId }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.listarCategorias();
      }
    });
  }

  // Eliminar producto

  confirmDeleteCategoria(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: '¿Estás seguro de que deseas eliminar esta categoria?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.deleteById(id).subscribe({
          next: () => {
            this.listarCategorias();
          },
          error: (error) => {
            console.error('Error al eliminar producto:', error);
          },
          complete: () => {
          }
        });
      } else {
      }
    });
  }
}
