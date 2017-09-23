import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios
import {EstudiantesService} from './services/estudiantes.service';

//Componentes
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteComponent } from './components/estudiantes/estudiante.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoComponent } from './components/cursos/curso.component';
import { NavbarComponent } from './components/shared/navbar.component';
import { FooterComponent } from './components/shared/footer.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    EstudianteComponent,
    CursoComponent,
    CursosComponent,
    NavbarComponent,
    FooterComponent,
    KeysPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
  EstudiantesService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
