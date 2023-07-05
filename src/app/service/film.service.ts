import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Film} from "../model/Film";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  //API LOCAL
  private API_FILM = environment.API_LOCAL +'film';
  constructor(private httpClient: HttpClient) { }
  createFilmService(film: Film):Observable<any>{
    return this.httpClient.post(this.API_FILM, film)
  }
  getListFilm():Observable<any>{
    return this.httpClient.get<any>(this.API_FILM)
  }
  deleteFilm(id:number):Observable<any>{
    return this.httpClient.delete(this.API_FILM+ '/'+id);
  }
  getFilmById(id: number):Observable<any>{
    return this.httpClient.get<any>(this.API_FILM+'/'+id);
    // return this.httpClient.get(`${this.API_CATEGORY}/${id}`)
  }
  updateFilm(id: number, film: Film):Observable<any>{
    return this.httpClient.put(this.API_FILM +'/'+ id, film);
  }
  getPageFilm(request: any):Observable<any>{
    const params = request;
    return this.httpClient.get(this.API_FILM+'/page', {params})
  }
  getFilmImg():Observable<any>{
    return this.httpClient.get(this.API_FILM +'/filmImg')
  }
  getTopFilm():Observable<any>{
    return this.httpClient.get(this.API_FILM+ '/views')
  }
  getFilmByCategoryId(id: number):Observable<any>{
    return this.httpClient.get(this.API_FILM+'/category/'+ id)
  }
  getFilmByNationId(id: number):Observable<any>{
    return this.httpClient.get(this.API_FILM +'/nation/'+ id)
  }
  getListSearch(searchValue:any):Observable<any>{
    let params = {name:searchValue}
    return this.httpClient.get(this.API_FILM +'/search',{params})
  }
  increaseView(id: number):Observable<any>{
    return this.httpClient.get(this.API_FILM + '/view/'+ id)
  }
}
