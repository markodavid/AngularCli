import { RouterModule, Routes } from '@angular/router';
import {EstudiantesComponent} from './components/estudiantes/estudiantes.component';
import {EstudianteComponent} from './components/estudiantes/estudiante.component';
import {CursosComponent} from './components/cursos/cursos.component';
import {CursoComponent} from './components/cursos/curso.component';


const APP_ROUTES: Routes = [
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'estudiante/:id', component: EstudianteComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'estudiantes' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
