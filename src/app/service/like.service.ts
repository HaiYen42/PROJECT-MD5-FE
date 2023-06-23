import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Like} from "../model/Like";
import {extractReferencesFromType} from "@angular/compiler-cli/src/ngtsc/metadata/src/util";

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private API_LIKE = environment.API_LOCAL +'like'
  constructor(private httpClient: HttpClient) { }
  likeService(like: Like): Observable<any>{
    return this.httpClient.post(this.API_LIKE, like);
  }
}
