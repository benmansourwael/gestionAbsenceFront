import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Groupe} from "../entity/groupe";
import {backUrl} from "../../../global";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  url = backUrl + 'groupe';

  constructor(private http: HttpClient ) { }

  getGroupes():Observable<Groupe[]>{
    return this.http.get<Groupe[]>(this.url);
  }


}
