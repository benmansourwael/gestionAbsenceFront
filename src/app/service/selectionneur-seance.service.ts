import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeanceCours } from '../entity/seanceCours';
import {EventEmitter, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {backUrl} from "../../../global";

@Injectable({providedIn:'root'})
export class SelectionneurSeanceService{
  postId:String='';
  errorMessage:String='';
  baseURL: string = backUrl+"seancecours";
  emitter:EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  addSeance(seanceCours:SeanceCours){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(seanceCours);
    return this.http.post<any>(this.baseURL , body,{'headers':headers}).subscribe();

  }

  getSeance(){
    return this.http.get<SeanceCours[]>(this.baseURL);
  }
}


