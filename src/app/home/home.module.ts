import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import DashboardComponent from './home.component';
import { SideMenuComponent } from '../shared/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import ProductComponent from './pages/product/product/product.component';
import { DialogEditarProductComponent } from './pages/product/editar-product/dialog-editar-product.component';
import CategoryComponent from './pages/category/category/category.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { DialogAddSupplierComponent } from './pages/supplier/add-supplier/dialog-add-supplier.component';
import SupplierComponent from './pages/supplier/supplier/supplier.component';
import { DialogEditarSupplierComponent } from './pages/supplier/editar-supplier/dialog-editar-supplier.component';
import { DialogAddProductComponent } from './pages/product/add-product/dialog-add-product.component';
import { DialogEditarCategoryComponent } from './pages/category/editar-category/dialog-editar-category.component';
import { DialogAddCategoryComponent } from './pages/category/add-category/dialog-add-category.component';


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
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from '../auth/login/login.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    ProductComponent,
    CategoryComponent,
    DialogEditarProductComponent,
    DialogAddCategoryComponent,
    DialogEditarCategoryComponent,
    SupplierComponent,
    DialogAddSupplierComponent,
    DialogEditarSupplierComponent,
    DialogAddProductComponent,
    ConfirmDialogComponent,
    FooterComponent,
    LoginComponent
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
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSortModule,
  ]
})
export class HomeModule { }
