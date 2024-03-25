import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthAdapterService } from 'src/app/context/person/infrastucture/adapters/auth.adapter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  userName = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required]);
  errorMessage = '';

  constructor(private loginService: AuthAdapterService,
    private router: Router,
    private authService: AuthService) { }

  login(): void {
    if (this.userName.valid && this.pass.valid) {
      this.loginService.login(this.userName.value, this.pass.value).subscribe(
        response => {
          // Manejar la respuesta del servidor después de iniciar sesión correctamente
          //console.log('Inicio de sesión exitoso:', response);
          this.authService.guardarToken(response.token, response.refreshToken);
          // Verificar si el usuario ya está autenticado
          if (this.authService.isAuthenticated()) {
            // El usuario ya está autenticado, redirigir directamente al panel de dashboard
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/login']);
          }
        },
        error => {
          console.error('Error al iniciar sesión:', error);
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      );
    }
  }

  getErrorMessage(): string {
    if (this.userName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.userName.hasError('user') ? 'Not a valid user' : '';
  }
}
