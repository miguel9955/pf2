import { Component, OnInit } from '@angular/core';
import { Reporte } from '../reporte';
import { ReporteService } from '../reporte.service';
import { Router } from '@angular/router';
import { IdService } from '../id.service'; // Importar el servicio compartido
import { LoginService } from 'src/app/services/auth/login.service';


@Component({
  selector: 'app-registrar-reporte',
  templateUrl: './registrar-reporte.component.html',
  styleUrls: ['./registrar-reporte.component.css']
})
export class RegistrarReporteComponent implements OnInit {
  userLoginOn:boolean=false;

  reporte: Reporte = { 
    id_reporte: 0, // o el valor predeterminado que desees
    contenido: '', // o el valor predeterminado que desees
    asesor: { id: 0, nombre: '', apellido: '', documento: 0, contraseña: '' }, 
    turno: { id: 0, nombre: '', apellido: '', documeto: 0, estado: '',discapacidad:'' ,modulo:'',tipoturno:''} 
  };
  constructor(
    private reporteServicio: ReporteService, 
    private router: Router,
    private idService: IdService, // Inyectar el servicio compartido
    private loginService:LoginService
  ) {}
 

  ngOnInit(): void {
    // Suscribirse al cambio del ID
    this.idService.currentId.subscribe(id => {
      // Hacer lo que necesites con el ID recibido
      console.log('ID recibido:', id);
      this.reporte.turno.id = id; // Asignar el ID al reporte
    });
    

  }

  guardarReporte() {
    this.reporteServicio.registrarReporte(this.reporte).subscribe(
      dato => {
        console.log(dato);
        this.returnListaReporte();
      },
      error => console.log(error)
    );
  }

  returnListaReporte() {
    this.router.navigate(['/reporte']);
  }

  onSubmit() {
    this.guardarReporte();
  }
}
