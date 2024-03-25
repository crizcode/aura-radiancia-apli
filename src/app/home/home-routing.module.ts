import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import HomeComponent from './home.component';
import ProductComponent from './pages/product/product/product.component';
import CategoryComponent from './pages/category/category/category.component';
import SupplierComponent from './pages/supplier/supplier/supplier.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import PersonComponent from './pages/person/person/person.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService], // Proteger la ruta
    children: [
      {
        path: 'productos',
        component: ProductComponent,
      },
      {
        path: 'categoria',
        component: CategoryComponent,
      },
      {
        path: 'proveedor',
        component: SupplierComponent,
      },
      {
        path: 'persona',
        component: PersonComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

