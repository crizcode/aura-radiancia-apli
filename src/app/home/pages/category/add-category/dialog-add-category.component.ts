import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/context/category/domain/models/category.model';
import { CategoryAdapterService } from 'src/app/context/category/infrastucture/adapters/category.adapter.service';


@Component({
  selector: 'app-add-category-component',
  templateUrl: './dialog-add-category.component.html',
  styleUrls: ['./dialog-add-category.component.css']
})

export class DialogAddCategoryComponent implements OnInit {

  @Output() categoryAdded: EventEmitter<any> = new EventEmitter();

  categories: CategoryModel[] = [];

  categoryData = {
    name: '',
    estado: '',
  };

  constructor(
    public dialogRef: MatDialogRef<DialogAddCategoryComponent>,
    private categoryService: CategoryAdapterService,
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  crearCategoria(): void {
    if (!this.isValidCategoryData()) {
      console.error('Por favor, complete todos los campos.');
      return;
    }

    this.categoryService.create(this.categoryData).subscribe({
      next: (response) => {
        //console.log('Categoria creado:', response);
        this.dialogRef.close('success');
      },
      error: (error) => {
        console.error('Error al crear categoria:', error);
      }
    });
  }

  isValidCategoryData(): boolean {
    return (
      this.categoryData.name.trim() !== '' &&
      this.categoryData.estado !== null
    );
  }

  loadCategories(): void {
    this.categoryService.findAll().subscribe((categories: CategoryModel[]) => {
      this.categories = categories;
    });
  }


  onClose(): void {
    this.dialogRef.close();
  }
}
