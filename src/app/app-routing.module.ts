import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';


const routes: Routes = [

  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NopageFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    DashboardRoutingModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }