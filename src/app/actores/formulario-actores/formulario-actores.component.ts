
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorEdicionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: actorEdicionDTO;

  @Input()
  errors: string[] = [];

  @Output()
  OnSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      dateBirth: '',
      picture: null,
      biography: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  onSubmit(){
    //console.log(this.form.value);
    this.OnSubmit.emit(this.form.value);
  }

  cambioMarkdown(text: string){
    this.form.get('biography').setValue(text);

  }

  archivoSeleccionado(file: File){
    //console.log(file);
    this.form.get('picture').setValue(file);
  }

}
