import {Component, OnInit} from '@angular/core';
import {CompteEnseignantService} from "../../service/compteEnseignant.service";



@Component({
  selector: 'app-seance-liste-etudiant-switch',
  templateUrl: './seance-liste-etudiant-switch.component.html',
  styleUrls: ['./seance-liste-etudiant-switch.component.css']
})
export class SeanceListeEtudiantSwitchComponent implements OnInit {
  option:String='seance';
  liste_matieres=[];

  constructor(private compteEnseignantService:CompteEnseignantService) { }

  ngOnInit(): void {


  }
  changeOption(value:String){
    this.option=value;
    this.compteEnseignantService.setValue(value);

  }
}
