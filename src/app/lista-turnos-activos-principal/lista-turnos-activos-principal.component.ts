import { Component, OnDestroy, OnInit } from '@angular/core';
import { Turno } from '../turno';
import { Subscription } from 'rxjs';
import { TurnoService } from '../turno.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-turnos-activos-principal',
  templateUrl: './lista-turnos-activos-principal.component.html',
  styleUrls: ['./lista-turnos-activos-principal.component.css']
})
export class ListaTurnosActivosPrincipalComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  turnos: Turno[] = [];

  constructor(private turnoServicio: TurnoService, private router: Router) { }
  ngOnInit(): void {
    this.obtenerTurnos();
    this.subscription = this.turnoServicio.refresh$.subscribe(() => {
      this.obtenerTurnos();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Observable cerrado')
  }
  actualizarTurno(id: number) {
    // Llamada al servicio para actualizar el estado del turno
    this.turnoServicio.actualizarEstadoTurno(id, 'activo').subscribe(() => {
      console.log('Estado del turno actualizado correctamente');
      // Actualizar la lista de turnos después de la actualización
      this.obtenerTurnos();
    }, error => {
      console.error('Error al actualizar el estado del turno:', error);
    });
  }
 //Esta Lista Maneja Filtros
  private obtenerTurnos() {

    this.turnoServicio.obtenerlistaTurno().subscribe(dato => { this.turnos = dato.filter(turno => turno.estado === "activo"); });
  }
  /*
  private obtenerTurnos() {

    this.turnoServicio.obtenerlistaTurno().subscribe(dato => { this.turnos = dato; });
  }
*/
  eliminarTurno(id: number) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este turno?');
    if (confirmacion == true) {
      this.turnoServicio.eliminarTurno(id).subscribe(dato => {
        console.log(dato);
        this.obtenerTurnos();
      })
    }
  }

}
