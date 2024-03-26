import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, interval, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { AuthAdapterService } from "../context/person/infrastucture/adapters/auth.adapter.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenRenewalInterval: any; // Variable para almacenar la referencia al intervalo de renovación del token

  constructor(private router: Router, private http: HttpClient,     private authService: AuthAdapterService) { 
    this.startTokenRenewalTimer();
  }



  // Método para iniciar el temporizador de renovación del token
  private startTokenRenewalTimer(): void {
    this.tokenRenewalInterval = interval(60000) // Verificar cada 28 minutos (28 * 60 * 1000 milisegundos)
      .subscribe(() => {
        if (this.shouldRenewToken()) {
          this.renewToken().subscribe(
          );
        }
      });
  }

  // Método para detener el temporizador de renovación del token
  private stopTokenRenewalTimer(): void {
    if (this.tokenRenewalInterval) {
      this.tokenRenewalInterval.unsubscribe(); // Detener el intervalo de verificación del token
    }
  }

  guardarToken(token: string, refreshToken: string): void {
    localStorage.setItem('aura-token', token);
    localStorage.setItem('aura-refresh-token', refreshToken); // Guardar refreshToken en el localStorage
  }

  obtenerToken(): string | null {
    return localStorage.getItem('aura-token');
  }

  obtenerRefreshToken(): string | null {
    return localStorage.getItem('aura-refresh-token'); // Obtener refreshToken del localStorage
  }

  eliminarTokens(): void {
    localStorage.removeItem('aura-token');
    localStorage.removeItem('aura-refresh-token'); // Eliminar tanto el token como el refreshToken del localStorage
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('aura-token');
    return token !== null;
  }

  logout(): void {
    this.eliminarTokens();
    this.router.navigate(['/login']);
  }



  shouldRenewToken(): boolean {
    // Implementa la lógica para determinar si el token necesita ser renovado
    // Por ejemplo, puedes verificar si el token está a punto de expirar
    const token = localStorage.getItem('aura-token');
    if (!token) {
      return false;
    }
  
    // Obteniendo la fecha de expiración del token
    const tokenExpiration = new Date(0);
    tokenExpiration.setUTCSeconds(JSON.parse(atob(token.split('.')[1])).exp);
  
    // Comparando la fecha de expiración con la fecha actual
    const now = new Date();
    const timeUntilExpiration = tokenExpiration.getTime() - now.getTime();
  
    // Devuelve true si el tiempo hasta la expiración es menor que un cierto umbral (por ejemplo, 2 minutos)
    // y también si el tiempo hasta la expiración es mayor o igual a cero (indicando que el token aún no ha expirado)
    return timeUntilExpiration < 60000 && timeUntilExpiration >= 0; // 1 minuto
  }


  renewToken(): Observable<any> {
    const refreshToken = localStorage.getItem('aura-refresh-token');
    if (!refreshToken) {
      return throwError("No hay token para renovar.");
    }
    
    // Llama al método renewToken del servicio AuthAdapterService
    return this.authService.renewToken(refreshToken).pipe(
      tap((response) => {
        const newToken = response.token;
        const refreshToken = response.refreshToken;
        // Almacena el nuevo token en el almacenamiento local
        localStorage.setItem('aura-token', newToken);
        localStorage.setItem('aura-refresh-token', refreshToken);
       // console.log('Token renovado exitosamente.');
      }),
      catchError(error => {
        console.error('Error al renovar el token:', error);
        return throwError('Error al renovar el token.');
      })
    );
  }
}
