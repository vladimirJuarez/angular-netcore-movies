import { Component, OnInit } from '@angular/core';
import { cineCracionDTO } from '../cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(cine : cineCracionDTO){
    console.log(cine);
  }

}
