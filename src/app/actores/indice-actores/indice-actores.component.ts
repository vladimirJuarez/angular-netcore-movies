import { Component, OnInit } from '@angular/core';
import {actorDTO} from "../actor";
import {ActoresService} from "../actores.service";
import {HttpResponse} from "@angular/common/http";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent implements OnInit {

  constructor(private actorsService: ActoresService) { }

  actors: actorDTO[];
  columnsToShow = ['id', 'name', 'dateBirth', 'picture', 'biography', 'actions'];
  totalAmountRecords: number;
  totalAmountRecordsToShow: number = 10;
  currentePage = 1;

  ngOnInit(): void {
    this.loadRows(this.currentePage, this.totalAmountRecordsToShow);
  }

  updatePagination(data: PageEvent){
    this.currentePage = data.pageIndex + 1;
    this.totalAmountRecordsToShow = data.pageSize;
    this.loadRows(this.currentePage, this.totalAmountRecordsToShow);
  }

  loadRows(page: number, amountElementsToShow: number){
    this.actorsService.getAll(page, amountElementsToShow)
      .subscribe((response: HttpResponse<actorDTO[]>) => {
        this.actors = response.body;
        console.log(response.headers.get("totalAmountRecords"));
        this.totalAmountRecords = Number.parseInt(response.headers.get("totalAmountRecords"));
      }, error => console.log(error));
  }

  delete(id: number){
    this.actorsService.delete(id)
      .subscribe(() => {
        this.loadRows(this.currentePage, this.totalAmountRecordsToShow);
      }, error => console.log(error));
  }
}
