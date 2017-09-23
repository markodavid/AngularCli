import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { EstudiantesService } from '../../services/estudiantes.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent implements OnInit {

  private estudiante:Estudiante = {
    tipoDocumento:"",
    documento:"",
    nombre:"",
    telefono1:"",
    telefono2:"",
    telefono3:"",
    sexo:"",
    direccion:"",
    email:""
}

nuevo:boolean=false;
id:string;

  constructor( private _estudiantesService:EstudiantesService,
              private router:Router,
              private route:ActivatedRoute) {

          this.route.params
          .subscribe(parametros=>{

            this.id =parametros['id']
            if(this.id !=="nuevo"){
              this._estudiantesService.getEstudiante(this.id)
              .subscribe(estudiante=>this.estudiante=estudiante)
            }
          });


  }

  ngOnInit() {
  }

  guardar() {

    console.log(this.estudiante);

if (this.id=="nuevo"){
  this._estudiantesService.nuevoEstudiante(this.estudiante)
  .subscribe(data=>{
    this.router.navigate(['/estudiante',data.name])
  },
  error=>console.error(error));

}else{

  this._estudiantesService.actualizarEstudiante(this.estudiante,this.id)
  .subscribe(data=>{
    console.log(data);
  },
  error=>console.error(error));
}

      }
      agregarNuevo(forma:NgForm) {
        this.router.navigate(['/estudiante','nuevo']);
        forma.reset();
      }


}
