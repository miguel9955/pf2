import { Component, OnDestroy, OnInit } from '@angular/core';
import { Reporte } from '../reporte';
import { Subscription } from 'rxjs';
import { ReporteService } from '../reporte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-reporte',
  templateUrl: './listar-reporte.component.html',
  styleUrls: ['./listar-reporte.component.css']
})
export class ListarReporteComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  reporte: Reporte[];
  constructor(private reporteServicio: ReporteService, private router: Router) { }
  ngOnInit(): void {
    this.obtenerReporte();
    this.subscription = this.reporteServicio.refresh$.subscribe(() => {
      this.obtenerReporte();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Observable cerrado')
  }
  private obtenerReporte() {

    this.reporteServicio.obtenerlistaReporte().subscribe(dato => { this.reporte = dato; });
  }
  actualizarAsesores(id: number) {
    this.router.navigate(['actualizar-reporte', id]);
  }
  eliminarReporte(id: number) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este turno?');
    if (confirmacion == true) {
      this.reporteServicio.eliminarReporte(id).subscribe(dato => {
        console.log(dato);
        this.obtenerReporte();
      })
    }
  }
}
