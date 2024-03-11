import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { catchError, forkJoin, throwError } from 'rxjs';
import { CategoryModel } from 'src/app/context/category/domain/models/category.model';
import { CategoryAdapterService } from 'src/app/context/category/infrastucture/adapters/category.adapter.service';
@Component({
  selector: 'app-editar-category',
  templateUrl: './dialog-editar-category.component.html',
  styleUrls: ['./dialog-editar-category.component.css']
})

export class DialogEditarCategoryComponent implements OnInit {
  category: CategoryModel = {} as CategoryModel;
  loaded: boolean = false; // Flag para indicar si los datos se han cargado

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { categoryId: number },
    private dialogRef: MatDialogRef<DialogEditarCategoryComponent>,
    private categoryService: CategoryAdapterService,
  ) {}

  ngOnInit(): void {
    const categoryId = this.data.categoryId;
    forkJoin({
      category: this.categoryService.findById(categoryId),
    }).pipe(
      catchError(error => {
        console.error('Error al obtener los datos:', error);
        return throwError(error);
      })
    ).subscribe(({ category}) => {
      if (!category) {
        console.error('No se encontró el categoria');
        return;
      }
      this.category = category;
      this.loaded = true;
    });
  }

  updateCategoria(): void {
    this.categoryService.update(this.category).subscribe(() => {
      console.log('Categoria actualizada correctamente');
      this.dialogRef.close('success');
    }, error => {
      console.error('Error al actualizar categoria:', error);
      // Puedes manejar el error aquí si lo deseas
    });
  }
}