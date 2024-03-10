import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularAdapterService {

  constructor(private router: Router) {}

  // Método para navegar a una ruta específica
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  handleHttpError(error: HttpErrorResponse): void {
    console.error('Error al realizar la solicitud HTTP:', error);
   
    
  }


}