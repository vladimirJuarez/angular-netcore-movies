import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from 'src/app/utilidades/mapa/coordenada';
import { cineCracionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  //this value is sent by parent component
  @Input()
  modelo: cineCracionDTO;

  //this value is sent by child component
  @Output()
  guardarCambios: EventEmitter<cineCracionDTO> =new EventEmitter<cineCracionDTO>();

  coordenadaInicial: Coordenada[]= [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        }
      ],
      latitud: [
        '',
        {
          validators: [Validators.required]  
        }
      ],
      longitud: [
        '',
        {
          validators: [Validators.required]  
        }
      ]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud});
    }
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }

  coordenadaSelecciona(coordenada: Coordenada){
    this.form.patchValue(coordenada);
    console.log(coordenada);
  }

}
