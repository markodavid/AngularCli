import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudiante } from '../../interfaces/estudiante.interface';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiante:Estudiante= {
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

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.estudiante);
  }

}
