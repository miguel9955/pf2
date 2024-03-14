import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turno } from './turno';
import { Observable, Subject,  } from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  
  private baseUrl ="http://localhost:1213/api/v1/turno"; 
  private _refresh$ = new Subject<void>();
  constructor(private httpClient : HttpClient) { }
//Obtener los turnos
  obtenerlistaTurno():Observable<Turno[]>{
    return this.httpClient.get<Turno[]>(`${this.baseUrl}`);
  }

  get refresh$(){
    return this._refresh$;
  }
  
//Metodo para registrar los turnos

  registrarturno(turno:Turno):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,turno)
    .pipe(
      tap(()=>{
        this._refresh$.next(); 
      })
    );
  }
  //Actualizar turnos
  actualizarTurno(id:number, turno:Turno) :Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,turno);

  }
  //ObtenerTurnos por Id
  ObtenerTurnoPorId(id:number):Observable<Turno>{
    return this.httpClient.get<Turno>(`${this.baseUrl}/${id}`);

  }
  //Eliminar
  eliminarTurno(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
