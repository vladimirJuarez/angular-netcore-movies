import { Component, OnInit } from '@angular/core';
import {GenerosService} from "../generos.service";
import {generoDTO} from "../generos";
import {HttpResponse} from "@angular/common/http";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generosService: GenerosService) { }

  genres: generoDTO[];
  columnasAMostrar = ['id', 'name', 'actions'];
  totalAmountRecords: number;
  totalAmountRecordsToShow: number = 10;
  currentePage = 1;

  ngOnInit(): void {
    this.loadRows(this.currentePage, this.totalAmountRecordsToShow);
    /*this.generosService.obtenerTodos()
      .subscribe(generos => {
        console.log(generos);
        this.genres = generos;
      }, error => console.log(error));*/


  }

  updatePagination(data: PageEvent){
    this.currentePage = data.pageIndex + 1;
    this.totalAmountRecordsToShow = data.pageSize;
    this.loadRows(this.currentePage, this.totalAmountRecordsToShow);

  }

  loadRows(page: number, amountElementsToShow: number){
    this.generosService.obtenerTodos(page, amountElementsToShow)
      .subscribe((response: HttpResponse<generoDTO[]>) => {
        this.genres = response.body;
        console.log(response.headers.get("totalAmountRecords"));
        this.totalAmountRecords = Number.parseInt(response.headers.get("totalAmountRecords"));
      }, error => console.log(error));
  }

  delete(id: number){
    this.generosService.delete(id)
      .subscribe(() => {
        this.loadRows(this.currentePage, this.totalAmountRecordsToShow);
      }, error => console.log(error));
  }

}
