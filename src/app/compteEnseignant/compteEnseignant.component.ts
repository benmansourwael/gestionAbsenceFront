import {Component, EventEmitter, OnInit} from '@angular/core';
import {SeanceListeEtudiantSwitchService} from "../service/seance-liste-etudiant-switch.service";
import {CompteEnseignantService} from "../service/compteEnseignant.service";

@Component({
    selector: 'app-compteEnseignant',
    templateUrl: './compteEnseignant.component.html',
    styleUrls: ['./compteEnseignant.component.css']
  })
  export class compteEnseignant implements OnInit {
  option='seance';


  constructor(private compteEnseignantService:CompteEnseignantService, private seanceListeEtudiantSwitchService:SeanceListeEtudiantSwitchService) {
  }

    ngOnInit(): void {
    this.compteEnseignantService.emitter.subscribe(()=>this.option = this.compteEnseignantService.getValue());


    }



}
