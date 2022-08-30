import {EventEmitter, Injectable} from "@angular/core";



@Injectable(
  {providedIn: "root"}
)
export class CompteEnseignantService{

  emitter:EventEmitter<any> = new EventEmitter();
  literal:string='';
  setValue(value: any) {
    this.literal = value;
    this.emitter.emit(value);
  }
  getValue(){
    return this.literal;
  }



}
