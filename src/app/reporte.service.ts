import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Reporte } from './reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private baseUrl ="http://localhost:1213/api/v1/reporte"; 
  private _refresh$ = new Subject<void>();
  constructor(private httpClient : HttpClient) { }
//Obtener los Reportes
  obtenerlistaReporte():Observable<Reporte[]>{
    return this.httpClient.get<Reporte[]>(`${this.baseUrl}`);
  }

  get refresh$(){
    return this._refresh$;
  }

  //Metodo para registrar los reportes

  registrarReporte(reporte:Reporte):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,reporte)
    .pipe(
      tap(()=>{
        this._refresh$.next(); 
      })
    );
  }
  //Actualizar reportes
  actualizarReporte(id:number, reporte:Reporte) :Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,reporte);

  }
  //Obtenerreportes por Id
  ObtenerReporte(id:number):Observable<Reporte>{
    return this.httpClient.get<Reporte>(`${this.baseUrl}/${id}`);

  }
  //Eliminar
  eliminarReporte(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  
}
