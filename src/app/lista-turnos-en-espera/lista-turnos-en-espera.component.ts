import { Component, OnDestroy, OnInit } from '@angular/core';
import { Turno } from '../turno';
import { Subscription } from 'rxjs';
import { TurnoService } from '../turno.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditarTurnoModalComponentComponent } from '../editar-turno-modal-component/editar-turno-modal-component.component';

@Component({
  selector: 'app-lista-turnos-en-espera',
  templateUrl: './lista-turnos-en-espera.component.html',
  styleUrls: ['./lista-turnos-en-espera.component.css']
})
export class ListaTurnosEnEsperaComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  turnos: Turno[];

  constructor(
    private turnoServicio: TurnoService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.obtenerTurnos();
    this.subscription = this.turnoServicio.refresh$.subscribe(() => {
      this.obtenerTurnos();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  abrirModalEditarTurno(turno: Turno): void {
    const dialogRef = this.dialog.open(EditarTurnoModalComponentComponent, {
      width: '500px',
      data: turno // Pasando el turno al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal ha sido cerrado');
      // Actualizar la lista de turnos después de cerrar el modal, si es necesario
      this.obtenerTurnos();
    });
  }

  private obtenerTurnos(): void {
    this.turnoServicio.obtenerlistaTurno().subscribe(dato => {
      this.turnos = dato.filter(turno => turno.estado === "En espera");
    });
  }

  eliminarTurno(id: number): void {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este turno?');
    if (confirmacion) {
      this.turnoServicio.eliminarTurno(id).subscribe(() => {
        console.log('Turno eliminado correctamente');
        // Actualizar la lista de turnos después de eliminar el turno
        this.obtenerTurnos();
      });
    }
  }
}
