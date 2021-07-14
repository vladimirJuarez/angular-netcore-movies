import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {actorCreacionDTO, actorDTO} from "./actor";
import {environment} from "../../environments/environment";
import {dateFormat} from "../utilidades/utilidades";
import {DatePipe} from "@angular/common";
import {Observable} from "rxjs";
import {generoCreacionDTO, generoDTO} from "../generos/generos";

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'actors';

  createActor(actor: actorCreacionDTO){
    const formData = this.buildFromData(actor);
    return this.http.post(this.apiURL, formData);
  }

  private buildFromData(actor: actorCreacionDTO): FormData{
    const formData = new FormData();
    formData.append('name', actor.name);
    if(actor.biography){
      formData.append('biography', actor.biography);
    }
    if(actor.dateBirth){
      const datepipe: DatePipe = new DatePipe('en-US')
      formData.append('dateBirth', datepipe.transform(actor.dateBirth, 'dd-MMM-YYYY HH:mm:ss'));
    }
    if(actor.picture){
      formData.append('picture', actor.picture);
    }

    return formData;
  }

  public getAll(page: number, amountElementsToShow: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', amountElementsToShow.toString());
    return this.http.get<actorDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public getByActorById(id: number){
    return this.http.get<actorDTO>(`${this.apiURL}/${id}`);
  }

  public edit(id:number, actor: actorCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, actor);
  }

  public delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
