import { Component, OnInit } from '@angular/core';
import { Asesores } from '../asesores';
import { AsesoresService } from '../asesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-asesores',
  templateUrl: './registrar-asesores.component.html',
  styleUrls: ['./registrar-asesores.component.css']
})
export class RegistrarAsesoresComponent implements OnInit {
  asesores : Asesores = new Asesores();
  constructor(private asesoresaervices:AsesoresService,private router:Router){}
  ngOnInit():void{
  }
  guardarAsesores(){
    this.asesoresaervices.registrarAsesores(this.asesores).subscribe(dato=> {console.log(dato);
    this.returnListaAsesores();}
    ,error=>console.log(error)) ;
  }
  returnListaAsesores(){
    this.router.navigate(['/asesores'])
  }
  onSubmit(){ 
    this.guardarAsesores();

  }
}
