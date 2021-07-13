import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  form: FormGroup;

  generos = [
    {id:1, nombre: 'Drama'},
    {id:2, nombre: 'Acción'},
    {id:3, nombre: 'Comedia'}
  ];

  peliculas = [
    {titulo:'Godzilla', enCines: false, proximosEstrenos: true, generos: [1,2], poster: 'https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_QL75_UX144_CR0,1,144,213_.jpg'},
    {titulo:'Maona', enCines: true, proximosEstrenos: false, generos: [3], poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX144_CR0,0,144,213_.jpg'},
    {titulo:'Invincible', enCines: false, proximosEstrenos: true, generos: [1,3], poster: 'https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UY213_CR1,0,144,213_.jpg'},
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  };
  
  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges
    .subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosEnURL();
    })
  }

  private escribirParametrosEnURL(){
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }

    if(valoresFormulario.generoId !== 0){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }

    if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if(valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objecto: any = {};

      if(params.titulo){
        objecto.titulo = params.titulo;
      }

      if(params.generoId){
        objecto.generoId = Number(params.generoId);
      }

      if(params.proximosEstrenos){
        objecto.proximosEstrenos = params.proximosEstrenos;
      }

      if(params.enCines){
        objecto.enCines = params.enCines;
      }

      this.form.patchValue(objecto);
    })
  }

  buscarPeliculas(valores: any){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(peli => peli.titulo.indexOf(valores.titulo) !== -1);
    }

    if(valores.generoId !== 0){ 
      this.peliculas = this.peliculas.filter(peli => peli.generos.indexOf(valores.generoId) !== -1);
    }

    if(valores.proximosEstrenos){ 
      this.peliculas = this.peliculas.filter(peli => peli.proximosEstrenos);
    }

    if(valores.enCines){ 
      this.peliculas = this.peliculas.filter(peli => peli.enCines);
    }
  }

  limpiar() {
    this.form.patchValue(this.formularioOriginal);
  }

}
