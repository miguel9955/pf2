import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turno } from './turno';
import { Observable, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  
  private baseUrl = "http://localhost:1213/api/v1/turno"; 
  private _refresh$ = new Subject<void>();

  constructor(private httpClient : HttpClient) { }

  obtenerlistaTurno(): Observable<Turno[]> {
    return this.httpClient.get<Turno[]>(`${this.baseUrl}`);
  }

  get refresh$(){
    return this._refresh$;
  }
  
  registrarturno(turno: Turno): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, turno).pipe(
      tap(() => {
        this._refresh$.next(); 
      })
    );
  }

  actualizarTurno(id: number, turno: Turno): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, turno).pipe(
      tap(() => {
        console.log('Turno actualizado correctamente');
        this._refresh$.next(); // Emitir notificación de actualización
      }),
      catchError(error => {
        console.error('Error al actualizar el turno:', error);
        throw error;
      })
    );
  }
  

  actualizarEstadoTurno(id: number, nuevoEstado: string): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${id}/estado`, { estado: nuevoEstado }).pipe(
      tap(() => {
        console.log('Estado del turno actualizado correctamente');
        this._refresh$.next(); // Emitir notificación de actualización
      }),
      catchError(error => {
        console.error('Error al actualizar el estado del turno:', error);
        throw error;
      })
    );
  }

  ObtenerTurnoPorId(id: number): Observable<Turno> {
    return this.httpClient.get<Turno>(`${this.baseUrl}/${id}`);
  }

  eliminarTurno(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        console.log('Turno eliminado correctamente');
        this._refresh$.next(); // Emitir notificación de actualización
      }),
      catchError(error => {
        console.error('Error al eliminar el turno:', error);
        throw error;
      })
    );
  }
}
