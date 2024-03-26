import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTurnosComponent } from './lista-turnos/lista-turnos.component';
import { RegistrarTurnoComponent } from './registrar-turno/registrar-turno.component';
import { ActualizarTurnoComponent } from './actualizar-turno/actualizar-turno.component';
import { ListaAsesoresComponent } from './lista-asesores/lista-asesores.component';
import { RegistrarAsesoresComponent } from './registrar-asesores/registrar-asesores.component';
import { ActualizarAsesoresComponent } from './actualizar-asesores/actualizar-asesores.component';
import { ListarReporteComponent } from './listar-reporte/listar-reporte.component';
import { RegistrarReporteComponent } from './registrar-reporte/registrar-reporte.component';
import { LoginComponent } from './login/login.component';
import { ListaTurnosEnEsperaComponent } from './lista-turnos-en-espera/lista-turnos-en-espera.component';
import { ListaTurnosActivosPrincipalComponent } from './lista-turnos-activos-principal/lista-turnos-activos-principal.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    {path : 'turnos',component:ListaTurnosComponent},
    {path : '',redirectTo:'homepage',pathMatch:'full'},
    {path : 'registrar-turno', component:RegistrarTurnoComponent},
    {path : 'actualizar-turno/:id', component:ActualizarTurnoComponent},
    {path : 'asesores',component:ListaAsesoresComponent},
    {path : 'registrar-asesores',component:RegistrarAsesoresComponent},
    {path : 'actualizar-asesores/:id', component:ActualizarAsesoresComponent},
    {path : 'reporte',component:ListarReporteComponent},
    {path : 'registrar-reporte', component:RegistrarReporteComponent},
    {path : 'login', component:LoginComponent,pathMatch:'full'},
    {path : 'lista-turnos-en-espera', component:ListaTurnosEnEsperaComponent,pathMatch:'full'},
    {path : 'lista-turnos-activos-principal', component:ListaTurnosActivosPrincipalComponent},
    {path : 'homepage', component:HomepageComponent},
    {path : 'editar-admin/:id', component:HomepageComponent},
    { path: 'homepage/registrar-turno', component: RegistrarTurnoComponent },
    { path: 'homepage/turnos', component: LoginComponent },
    { path: '', redirectTo: '/registrar-reporte', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/registrar-reporte' }, // Ruta para manejar rutas no encontradas






    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
