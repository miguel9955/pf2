import { Component, OnInit } from '@angular/core';
import { Asesores } from '../asesores';
import { AsesoresService } from '../asesores.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/app/enviroments/enviroment';

@Component({
  selector: 'app-registrar-asesores',
  templateUrl: './registrar-asesores.component.html',
  styleUrls: ['./registrar-asesores.component.css']

})
export class RegistrarAsesoresComponent implements OnInit {
  asesores : Asesores = new Asesores();
  userLoginOn:boolean=false;

  constructor(private asesoresaervices:AsesoresService,private router:Router,private loginService:LoginService){

    this.loginService.userLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    })
  }
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

