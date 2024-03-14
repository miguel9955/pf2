import { Component, OnInit } from '@angular/core';
import { Reporte } from '../reporte';
import { ReporteService } from '../reporte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-reporte',
  templateUrl: './registrar-reporte.component.html',
  styleUrls: ['./registrar-reporte.component.css']
})
export class RegistrarReporteComponent implements OnInit {
  reporte: Reporte = { 
    id_reporte: 0, // o el valor predeterminado que desees
    contenido: '', // o el valor predeterminado que desees
    asesor: { id: 0, nombre: '', apellido: '', documento: 0, contraseña: '' }, 
    turno: { id: 0, nombre: '', apellido: '', documeto: 0, estado: '' } 
  };
  constructor(private reporteServicio: ReporteService, private router: Router) {}

  ngOnInit(): void {}

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