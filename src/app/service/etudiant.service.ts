import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Etudiant} from "../entity/etudiant";
import {environment} from "../../environments/environment";

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

@Injectable()
export class EtudiantService {
  //url = 'http://localhost:8080/api/etudiant';
  url = environment.baseURL + "/api/etudiant";

  constructor(private http: HttpClient) {
  }

  getEtudiant(): Observable<Etudiant[]>{

    return this.http.get<Etudiant[]>(this.url);
  }

  getEtudiantByGroupeName(groupeName:String): Observable<Etudiant[]>{
  console.log(this.http.get<Etudiant[]>(this.url+'/'+groupeName));
  return this.http.get<Etudiant[]>(this.url+'/'+groupeName);
 }

}
