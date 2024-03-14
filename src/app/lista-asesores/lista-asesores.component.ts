import { Component, OnDestroy, OnInit } from '@angular/core';
import { Asesores } from '../asesores';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AsesoresService } from '../asesores.service';


@Component({
  selector: 'app-lista-asesores',
  templateUrl: './lista-asesores.component.html',
  styleUrls: ['./lista-asesores.component.css']
})
export class ListaAsesoresComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  asesores:Asesores[];
  constructor(private asesoreServices : AsesoresService , private router:Router){}
  ngOnInit(): void{
    this.obtenerAsesores();
    this.subscription= this.asesoreServices.refresh$.subscribe(()=>{
      this.obtenerAsesores();
    });
  }
ngOnDestroy(): void {
  this.subscription.unsubscribe();
  console.log('Observable cerrado')
}
  actualizarAsesores(id:number){
    this.router.navigate(['actualizar-asesores',id]);
  }

  private obtenerAsesores(){

    this.asesoreServices.obtenerlistaAsesores().subscribe(dato=>{ this.asesores=dato;});
  }
  
  eliminarAsesores(id:number){
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este turno?');
    if(confirmacion == true){
    this.asesoreServices.eliminarAsesores(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerAsesores();
    })
    }
  }

}
