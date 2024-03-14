import { Component, OnDestroy, OnInit } from '@angular/core';
import { Turno } from '../turno';
import { TurnoService } from '../turno.service';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.css']
})

export class ListaTurnosComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  turnos:Turno[];
  constructor(private turnoServicio : TurnoService , private router:Router){}
  ngOnInit(): void{
    this.obtenerTurnos();
    this.subscription= this.turnoServicio.refresh$.subscribe(()=>{
      this.obtenerTurnos();
    });
  }
ngOnDestroy(): void {
  this.subscription.unsubscribe();
  console.log('Observable cerrado')
}
  actualizarTurno(id:number){
    this.router.navigate(['actualizar-turno',id]);
  }
/* Esta Lista Maneja Filtros 
  private obtenerTurnos(){

    this.turnoServicio.obtenerlistaTurno().subscribe(dato=>{ this.turnos=dato.filter(turno=>turno.estado==="Activo");});
  }*/
  private obtenerTurnos() {

    this.turnoServicio.obtenerlistaTurno().subscribe(dato => { this.turnos = dato; });
  }
  
  eliminarTurno(id:number){
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este turno?');
    if(confirmacion == true){
    this.turnoServicio.eliminarTurno(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerTurnos();
    })
    }
  }

}
