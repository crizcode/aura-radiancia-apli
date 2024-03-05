import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import DashboardComponent from './dashboard.component';
import ProductoComponent from './pages/producto/producto.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { EditarProductComponent } from './pages/editar-product/editar-productcomponent';
import { AddProductComponent } from './pages/add-product/add-product.component';


const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
        {
            path: 'productos',
            component: ProductoComponent,
        },
        {
          path: 'categoria',
          component: CategoriaComponent,
        },
        {
          path: 'editarProducto/:productId',
          component: EditarProductComponent,
        },
        {
          path: 'addproduct',
          component: AddProductComponent,
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


