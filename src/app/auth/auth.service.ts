import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    constructor(private router: Router) { }
  
    guardarToken(token: string): void {
      localStorage.setItem('token', token);
    }
  
    obtenerToken(): string | null {
      return localStorage.getItem('token');
    }
  
    eliminarToken(): void {
      localStorage.removeItem('token');
    }
  
    isAuthenticated(): boolean {
      const token = localStorage.getItem('token');
      return token !== null;
    }

    logout(): void {
      this.eliminarToken();
    this.router.navigate(['/login']);
    }

  }
  