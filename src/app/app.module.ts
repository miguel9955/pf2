import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTurnosComponent } from './lista-turnos/lista-turnos.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RegistrarTurnoComponent } from './registrar-turno/registrar-turno.component';
import { FormsModule } from '@angular/forms';
import { ActualizarTurnoComponent } from './actualizar-turno/actualizar-turno.component';
import { ListaAsesoresComponent } from './lista-asesores/lista-asesores.component';
import { RegistrarAsesoresComponent } from './registrar-asesores/registrar-asesores.component';
import { ActualizarAsesoresComponent } from './actualizar-asesores/actualizar-asesores.component';
import { ListarReporteComponent } from './listar-reporte/listar-reporte.component';
import { RegistrarReporteComponent } from './registrar-reporte/registrar-reporte.component';
import { ListaTurnosEnEsperaComponent } from './lista-turnos-en-espera/lista-turnos-en-espera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { NavComponent } from './shared/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/auth/error-interceptor.service';
import { ListaTurnosActivosPrincipalComponent } from './lista-turnos-activos-principal/lista-turnos-activos-principal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarTurnoModalComponentComponent } from './editar-turno-modal-component/editar-turno-modal-component.component';
import { EditarAdminComponent } from './editar-admin/editar-admin.component';







@NgModule({
  declarations: [
    AppComponent,
    ListaTurnosComponent,
    RegistrarTurnoComponent,
    ActualizarTurnoComponent,
    ListaAsesoresComponent,
    RegistrarAsesoresComponent,
    ActualizarAsesoresComponent,
    ListarReporteComponent,
    RegistrarReporteComponent,
    ListaTurnosEnEsperaComponent,
    LoginComponent,
    PersonalDetailsComponent,
    NavComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ListaTurnosActivosPrincipalComponent,
    HomepageComponent,
    EditarTurnoModalComponentComponent,
    EditarAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
