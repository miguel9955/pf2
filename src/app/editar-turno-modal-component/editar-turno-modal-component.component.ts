import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router'; // Importa Router
import { Turno } from '../turno';
import { TurnoService } from '../turno.service';
import { IdService } from '../id.service'; // Importar el servicio compartido

@Component({
  selector: 'app-editar-turno-modal-component',
  templateUrl: './editar-turno-modal-component.component.html',
  styleUrls: ['./editar-turno-modal-component.component.css']
})
export class EditarTurnoModalComponentComponent {
  turno: Turno;
  modulos: any[] = [
    { id: 'Modulo 1', nombre: 'Modulo 1' },
    { id: 'Modulo 2', nombre: 'Modulo 2' }
  ];

  constructor(
    private turnoServicio: TurnoService,
    private idService: IdService, // Inyectar el servicio compartido
    private router: Router, // Inyectar el servicio Router
    public dialogRef: MatDialogRef<EditarTurnoModalComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.turno = data; 
  }

  guardarCambios(): void {
    // Asigna el estado 'activo' antes de actualizar el turno
    this.turno.estado = 'activo';
    // Llama al servicio para actualizar el turno
    this.turnoServicio.actualizarTurno(this.turno.id, this.turno).subscribe(
      () => {
        console.log('Turno actualizado correctamente');
        this.idService.changeId(this.turno.id); // Envía el ID al servicio compartido
        this.dialogRef.close();
        this.turnoServicio.refresh$.next(); // Emitir notificación de actualización

        // Después de cerrar el modal, navega a tu componente deseado
        this.router.navigate(['/registrar-reporte']);
      },
      error => {
        console.error('Error al actualizar el turno:', error);
      }
    );
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
