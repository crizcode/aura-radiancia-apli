import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home/home-routing.module';
import { LoginComponent } from './auth/login/login.component';
import HomeComponent from './home/home.component';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NopageFoundComponent } // Manejar rutas no encontradas
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HomeRoutingModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }