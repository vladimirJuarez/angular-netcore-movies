import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  /*ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'The godfather',
        fechaLazamiento: new Date(),
        precio: 140,
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
      },
      {
        titulo: 'Invencible',
        fechaLazamiento: new Date(),
        precio: 150,
        poster: "https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        titulo: 'Aquaman',
        fechaLazamiento: new Date(),
        precio: 160,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSN8SCgNFi4pSXlcWK55e9t5du0BO4w3yfjQ&usqp=CAU"
      }]
    }, 500);
  }  
  
  title = 'front-end-changed';  
  ocultar = false;

  peliculasEnCines = new Array;
  peliculasProxEstrenos = [{
    titulo: 'batman',
    fechaLazamiento: new Date(),
    precio: 140,
  },
  {
    titulo: 'rocky',
    fechaLazamiento: new Date(),
    precio: 160
  },
  {
    titulo: 'la ley de herodes',
    fechaLazamiento: new Date(),
    precio: 160
  }];*/

  duplicarNumero(valor: number): number {
    return valor * 2;
  }

  manejarRated(voto: number): void {
    alert(voto);
  }
}
