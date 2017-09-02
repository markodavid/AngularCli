import { RouterModule, Routes } from '@angular/router';
import {EstudiantesComponent} from './components/estudiantes/estudiantes.component';
import {EstudianteComponent} from './components/estudiantes/estudiante.component';

const APP_ROUTES: Routes = [
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'estudiante/:id', component: EstudianteComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'estudiantes' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
