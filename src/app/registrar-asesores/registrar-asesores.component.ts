import { Component, OnInit } from '@angular/core';
import { Asesores } from '../asesores';
import { AsesoresService } from '../asesores.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { AuthService } from 'src/app/services/auth/auth.service'; // Importa el servicio AuthService
import { RegisterRequest } from 'src/app/register-request'; // Importa la clase RegisterRequest

@Component({
  selector: 'app-registrar-asesores',
  templateUrl: './registrar-asesores.component.html',
  styleUrls: ['./registrar-asesores.component.css']
})
export class RegistrarAsesoresComponent implements OnInit {
  asesores: Asesores = new Asesores();
  registerRequest: RegisterRequest = new RegisterRequest(); // Agrega un objeto RegisterRequest
  userLoginOn:boolean=false;

  constructor(
    private asesoresService: AsesoresService,
    private authService: AuthService,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginService.userLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });
  }

  ngOnInit(): void {}

  guardarAsesores() {
    this.authService.register(this.registerRequest).subscribe(
      (userData) => {
        console.log('Usuario registrado correctamente:', userData);
        // Después de que el usuario se registre, procede a registrar el asesor
        this.asesoresService.registrarAsesores(this.asesores).subscribe(
          (asesorData) => {
            console.log('Asesor registrado correctamente:', asesorData);
            this.returnListaAsesores();
          },
          (error) => console.error('Error al registrar asesor:', error)
        );
      },
      (error) => console.error('Error al registrar usuario:', error)
    );
  }

  returnListaAsesores() {
    this.router.navigate(['/asesores']);
  }

  onSubmit() {
    this.guardarAsesores();
  }
}
