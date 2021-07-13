import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../generos';
import {GenerosService} from "../generos.service";
import {parsearErroresAPI} from "../../utilidades/utilidades";
//import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  errores: string[] = [];

  constructor(private router: Router, private generosService: GenerosService ) { }

  guardarCambios(genero: generoCreacionDTO){
    //console.log(genero);
    this.generosService.createGenre(genero).subscribe(() => {
      this.router.navigate(['/generos']);
    }, error => this.errores = parsearErroresAPI(error));
  }
}
