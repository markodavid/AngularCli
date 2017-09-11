import { Component, OnInit } from '@angular/core';
import {EstudiantesService} from '../../services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

estudiantes:any[]=[];

  constructor(private _estudiantesService:EstudiantesService) {
this._estudiantesService.getEstudiantes()
.subscribe(data=>{
  console.log(data);

  }
)

   }

  ngOnInit() {
  }

}
