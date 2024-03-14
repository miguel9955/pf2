import { Injectable } from '@angular/core';
import { Observable, Subject,  } from 'rxjs';
import {tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Asesores } from './asesores';



@Injectable({
  providedIn: 'root'
})
export class AsesoresService {
  private baseUrl ="http://localhost:1213/api/v1/asesores"; 
  private _refresh$ = new Subject<void>();
  constructor(private httpClient : HttpClient) { }
//Obtener los Asesores
  obtenerlistaAsesores():Observable<Asesores[]>{
    return this.httpClient.get<Asesores[]>(`${this.baseUrl}`);
  }

  get refresh$(){
    return this._refresh$;
  }

  //Metodo para registrar los turnos

  registrarAsesores(asesores:Asesores):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,asesores)
    .pipe(
      tap(()=>{
        this._refresh$.next(); 
      })
    );
  }
  //Actualizar turnos
  actualizarAsesores(id:number, asesores:Asesores) :Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,asesores);

  }
  //ObtenerTurnos por Id
  ObtenerAsesoresPorId(id:number):Observable<Asesores>{
    return this.httpClient.get<Asesores>(`${this.baseUrl}/${id}`);

  }
  //Eliminar
  eliminarAsesores(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  
}
