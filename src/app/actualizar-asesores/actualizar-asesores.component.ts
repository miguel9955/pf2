import { Component } from '@angular/core';
import { Asesores } from '../asesores';
import { AsesoresService } from '../asesores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-asesores',
  templateUrl: './actualizar-asesores.component.html',
  styleUrls: ['./actualizar-asesores.component.css']
})
export class ActualizarAsesoresComponent {
  id:number;
  asesores : Asesores=new Asesores();
  constructor(private asesoresservice:AsesoresService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.asesoresservice.ObtenerAsesoresPorId(this.id).subscribe(dato =>{
      this.asesores = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/asesores']);
  }
  returnListaTurnos(){
    this.router.navigate(['/asesores'])
  }

  onSubmit(){
    this.asesoresservice.actualizarAsesores(this.id,this.asesores).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }

}
