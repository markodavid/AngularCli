import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {  Estudiante  } from '../interfaces/estudiante.interface';
import 'rxjs/Rx';

@Injectable()
export class EstudiantesService {

  estudiantesURL:string='https://alianzapopayan.firebaseio.com/Estudiantes.json';
  estudianteURL:string='https://alianzapopayan.firebaseio.com/Estudiantes/';


  constructor(private http:Http) { }

  nuevoEstudiante(estudiante:Estudiante){
    let body = JSON.stringify(estudiante);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post(this.estudiantesURL,body,{headers})
    .map(res=>{
      console.log(res.json());
      return res.json();
    })
  }
//////////
actualizarEstudiante(estudiante:Estudiante,key$:string){
  let body = JSON.stringify(estudiante);
  let headers = new Headers({
    'Content-Type':'application/json'
  });
let url=`${this.estudianteURL}/${key$}.json`;

  return this.http.put(url,body,{headers})
  .map(res=>{
    console.log(res.json());
    return res.json();
  })



}

getEstudiante(key$:string){

  let url = `${this.estudianteURL}/${key$}.json`;
  return this.http.get(url)
  .map(res=>res.json());
}

getEstudiantes(){
  return this.http.get(this.estudiantesURL)
  .map(res=>{
console.log(res.json());
    res.json()});

}


  }
