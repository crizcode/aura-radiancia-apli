import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import DashboardComponent from './dashboard.component';
import ProductComponent from './pages/product/product/product.component';
import CategoryComponent from './pages/category/category/category.component';
import SupplierComponent from './pages/supplier/supplier/supplier.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
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

    ]
},

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }


