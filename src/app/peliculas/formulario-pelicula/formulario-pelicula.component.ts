import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaEdicionDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();  

  @Input()
  modelo: PeliculaEdicionDTO;

  generosNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Acción'},
    {llave: 3, valor: 'Comedia'},
  ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Cinépolis'},
    {llave: 2, valor: 'Cinemex'},
    {llave: 3, valor: 'Cinepaps'},
  ];

  cinesSeleccionados: MultipleSelectorModel[] = [];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    console.log(this.generosSeleccionados);
    var generosIds = this.generosSeleccionados.map(val => val.llave);
    //console.log(generosIds);
    this.form.get("generosId").setValue(generosIds);

    var cinesIds = this.cinesSeleccionados.map(val => val.llave);
    //console.log(cinesIds);
    this.form.get("cinesId").setValue(cinesIds);

    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(img: File) {
    this.form.get('poster').setValue(img);
  }

  changeMarkdown(resumen: string){
    this.form.get('resumen').setValue(resumen);
  }

}
