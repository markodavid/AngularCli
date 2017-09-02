import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios
import {EstudiantesService} from './services/estudiantes.service';

//Componentes
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteComponent } from './components/estudiantes/estudiante.component';
import { NavbarComponent } from './components/shared/navbar.component';
import { FooterComponent } from './components/shared/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    EstudianteComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    EstudiantesService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
