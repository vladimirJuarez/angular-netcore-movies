import { Injectable } from '@angular/core';
import {generoCreacionDTO, generoDTO} from "./generos";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'genres';

  public obtenerTodos(page: number, amountElementsToShow: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', amountElementsToShow.toString());
    return this.http.get<generoDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public createGenre(genre: generoCreacionDTO){
    return this.http.post(this.apiURL, genre);
  }

  public getByGenreById(id: number){
    return this.http.get<generoDTO>(`${this.apiURL}/${id}`);
  }

  public edit(id:number, genre: generoCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, genre);
  }

  public delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
