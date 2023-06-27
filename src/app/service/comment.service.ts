import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {CommentDTO} from "../model/CommentDTO";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private API_COMMENT = environment.API_LOCAL +'comment'
  constructor(private httpClient: HttpClient) { }

  commentService(comment: CommentDTO): Observable<any>{
    return this.httpClient.post(this.API_COMMENT, comment);
  }
}
