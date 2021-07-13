import { Component, OnInit } from '@angular/core';
import { cineCracionDTO, cineEdicionDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  modelo: cineEdicionDTO = {nombre: "Kong", latitud: 20.901307125680574, longitud:-98.4529495239258};
  ngOnInit(): void {
  }

  guardarCambios(cine: cineCracionDTO){
    console.log(cine);
  }

}
