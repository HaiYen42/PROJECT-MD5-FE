import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/Category";
import {Observable} from "rxjs";
import {Nation} from "../model/Nation";
import {Like} from "../model/Like";
import {extractReferencesFromType} from "@angular/compiler-cli/src/ngtsc/metadata/src/util";

@Injectable({
  providedIn: 'root'
})
export class NationService {

  //API_LOCAL
  private API_NATION = environment.API_LOCAL + 'nation'

  constructor(private httpClient: HttpClient) {
  }

  createNationService(nation: Nation): Observable<any> {
    return this.httpClient.post<any>(this.API_NATION, nation);
  }

  getListNation(): Observable<any> {
    return this.httpClient.get(this.API_NATION)
  }

  getNationById(id: number): Observable<any> {
    return this.httpClient.get(this.API_NATION + '/' + id);
    // return this.httpClient.get(`${this.API_CATEGORY}/${id}`)
  }


  updateNation(id: number, nation: Nation): Observable<any> {
    return this.httpClient.put(this.API_NATION + '/' + id, nation);
  }
  deleteNation(id: number):Observable<any>{
    return this.httpClient.delete(this.API_NATION+'/'+id)
  }
  getPageNation(request: any):Observable<any>{
    const  params = request;
    return this.httpClient.get(this.API_NATION +'/page',{params} )
  }

}
