import { Component, OnInit } from '@angular/core';
import { Turno } from '../turno';
import { TurnoService } from '../turno.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-turno',
  templateUrl: './registrar-turno.component.html',
  styleUrls: ['./registrar-turno.component.css']
})
export class RegistrarTurnoComponent implements OnInit {
  turno : Turno = new Turno();
  constructor(private turnoservicio:TurnoService,private router:Router){}
  ngOnInit():void{
  }
  
  guardarTurno(){
    this.turnoservicio.registrarturno(this.turno).subscribe(dato=> {console.log(dato);
    this.returnListaTurnos();}
    ,error=>console.log(error)) ;
  }
  returnListaTurnos(){
    this.router.navigate(['/turnos'])
  }
  onSubmit(){ 
    this.guardarTurno();

  }
}
