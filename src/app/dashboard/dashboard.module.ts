import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import DashboardComponent from './dashboard.component';
import { SideMenuComponent } from '../shared/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import ProductoComponent from './pages/producto/producto.component';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { AddProductComponent} from './pages/add-product/add-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditarProductComponent} from './pages/editar-product/editar-productcomponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    ProductoComponent,
    CategoriaComponent,
    AddProductComponent,
    EditarProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
