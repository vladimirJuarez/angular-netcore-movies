import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaEdicionDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }


  modelo: PeliculaEdicionDTO = {titulo: 'Spider Man', enCines: true, resumen: 'cosa',
fechaLanzamiento: new Date(), poster: 'https://m.media-amazon.com/images/M/MV5BMjM3MzY2OTMtZDg2YS00Mjc5LTllNWItODQyYTE5NjJjZGRmXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UY266_CR147,0,180,266_.jpg',
trailer: 'https://www.imdb.com/video/vi2620371481?playlistId=tt0110912&ref_=tt_pr_ov_vi'}

  ngOnInit(): void {
  }

  guardarCambios(peli: PeliculaCreacionDTO){
    console.log(peli);
  }

}
