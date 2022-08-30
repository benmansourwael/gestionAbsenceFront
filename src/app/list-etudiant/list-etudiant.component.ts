import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../entity/etudiant";
import {EtudiantService} from "../service/etudiant.service";
import {ListeEtudiantsService} from "../service/liste-etudiants.service";
import {SelectionneurSeanceService} from "../service/selectionneur-seance.service";
import {SeanceCours} from "../entity/seanceCours";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  liste_seances: SeanceCours[]=[];
  liste_etudiant: Etudiant[] = [];


  constructor(private etudiantService: EtudiantService, private listeEtudiantsService: ListeEtudiantsService, private selectionneurService: SelectionneurSeanceService) {
  }

  ngOnInit(): void {
    this.listeEtudiantsService.emitter.subscribe(
      () => this.etudiantService.getEtudiantByGroupeName(this.listeEtudiantsService.literal).subscribe(data => this.liste_etudiant = data)
      )
    this.listeEtudiantsService.emitter.subscribe(()=>this.selectionneurService.getSeance().subscribe(data => this.liste_seances = data))
    console.log(this.liste_seances);
  }


  getSeance(){
    console.log(this.liste_seances);
  }

}















