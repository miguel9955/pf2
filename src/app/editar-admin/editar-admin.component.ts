import { Component } from '@angular/core';
import { Reporte } from '../reporte';
import { ReporteService } from '../reporte.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.css']
})
export class EditarAdminComponent {
  id:number;
  reporte : Reporte=new Reporte();
  constructor(private reporteService:ReporteService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reporteService.ObtenerReporte(this.id).subscribe(dato =>{
      this.reporte = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/reporte']);
  }
  returnListaTurnos(){
    this.router.navigate(['/reporte'])
  }

  onSubmit(){
    this.reporteService.actualizarReporte(this.id,this.reporte).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }

}
