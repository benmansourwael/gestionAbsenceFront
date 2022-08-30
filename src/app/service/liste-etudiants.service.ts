import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ListeEtudiantsService {

  emitter:EventEmitter<any> = new EventEmitter();


  literal:string='';


  constructor() {

  }
  setValue(value: any) {
    this.literal = value;

    this.emitter.emit(value);
  }
  getValue(){
    return this.literal;
  }


}
