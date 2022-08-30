import {EventEmitter, Injectable} from "@angular/core";

@Injectable(
  {providedIn: "root"}
)
export class SeanceListeEtudiantSwitchService {
  emitter:EventEmitter<any> = new EventEmitter();
  setOption(value:any){
    return this.emitter.emit(value);
  }

}
