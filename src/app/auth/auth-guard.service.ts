import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {

    // Verificar si el usuario está autenticado
    if (!this.authService.isAuthenticated()) {
      // Si el usuario no está autenticado, redirige al login
      this.router.navigate(['/login']);
      return of(false);
    }

    // Si el usuario está autenticado, verificar si es necesario renovar el token
    if (this.authService.shouldRenewToken()) {
      // Si es necesario renovar el token, intenta renovarlo
      return this.authService.renewToken().pipe(
        map(() => true), // Si la renovación tiene éxito, devuelve true
        catchError(() => {
          // Si hay un error durante la renovación, redirige al login
          this.router.navigate(['/login']);
          return of(false);
        })
      );
    }

    // Si el usuario está autenticado y no es necesario renovar el token, permite la activación de la ruta
    return of(true);
  }
}