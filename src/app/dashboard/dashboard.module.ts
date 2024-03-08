import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import DashboardComponent from './dashboard.component';
import { SideMenuComponent } from '../shared/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import ProductComponent from './pages/product/product/product.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { EditarProductComponent } from './pages/product/editar-product/editar-productcomponent';
import CategoryComponent from './pages/category/category/category.component';
import { DialogAddCategoryComponent } from './pages/category/dialog-add-category/dialog-add-category.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { DialogEditCategoryComponent } from './pages/category/dialog-edit-category/dialog-edit-category.component';
import SupplierComponent from './pages/supplier/supplier/supplier.component';
import { DialogAddSupplierComponent } from './pages/supplier/dialog-add-supplier/dialog-add-supplier.component';
import { DialogEditSupplierComponent } from './pages/supplier/dialog-edit-supplier/dialog-edit-supplier.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    ProductComponent,
    CategoryComponent,
    AddProductComponent,
    EditarProductComponent,
    DialogAddCategoryComponent,
    DialogEditCategoryComponent,
    SupplierComponent,
    DialogAddSupplierComponent,
    DialogEditSupplierComponent
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
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class DashboardModule { }
