import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {generoCreacionDTO, generoDTO} from '../generos';
import {GenerosService} from "../generos.service";
import {parsearErroresAPI} from "../../utilidades/utilidades";

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router,
              private genreService: GenerosService,
              private activatedRoute: ActivatedRoute) { }

  //modelo: generoCreacionDTO = { name: 'Drama' }
  model: generoDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.genreService.getByGenreById(params.id)
        .subscribe(genre => {
          this.model = genre;
        }, () => this.router.navigate(['/generos']));
    });

  }

  guardarCambios(genre: generoCreacionDTO){
    console.log(genre);
    this.genreService.edit(this.model.id, genre)
      .subscribe(() => {
        this.router.navigate(['/generos'])
      }, error => this.errors = parsearErroresAPI(error));
    //guardar cambios
  }

}
