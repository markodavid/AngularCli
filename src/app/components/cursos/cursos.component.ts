import { Component, OnInit } from '@angular/core';
import {EstudiantesService} from '../../services/estudiantes.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

estudiantes:any;

  constructor(private _estudiantesService:EstudiantesService) {
    this._estudiantesService.getEstudiantes()
    .subscribe(data => {
      console.log(data);
      //for(let key$ in data ){
        //console.log(data[key$]);
      //  this.estudiantes.push(data[key$]);
      //}

  })

   }

  ngOnInit() {
  }

}
