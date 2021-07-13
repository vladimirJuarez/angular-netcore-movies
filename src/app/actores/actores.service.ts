import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {actorCreacionDTO} from "./actor";
import {environment} from "../../environments/environment";
import {dateFormat} from "../utilidades/utilidades";
import {DatePipe} from "@angular/common";

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
}
