import { Component } from '@angular/core';
import { Turno } from '../turno';
import { TurnoService } from '../turno.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-turno',
  templateUrl: './actualizar-turno.component.html',
  styleUrls: ['./actualizar-turno.component.css']
})
export class ActualizarTurnoComponent {
  id:number;
  turno:Turno = new Turno();
  constructor(private turnoServicio:TurnoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.turnoServicio.ObtenerTurnoPorId(this.id).subscribe(dato =>{
      this.turno = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/turnos']);
  }
  returnListaTurnos(){
    this.router.navigate(['/turnos'])
  }

  onSubmit(){
    this.turnoServicio.actualizarTurno(this.id,this.turno).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }
}
