import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Departement} from '../../entity/departement';
import {Groupe} from '../../entity/groupe';
import {Matiere} from '../../entity/matiere';
import {ListeEtudiantsService} from "../../service/liste-etudiants.service";
import {SeanceCours} from "../../entity/seanceCours";
import {GroupeService} from "../../service/groupe.service";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {SelectionneurSeanceService} from "../../service/selectionneur-seance.service";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {backUrl} from "../../../../global";


@Component({
  selector: 'app-selectionneur-seance',
  templateUrl: './selectionneur-seance.component.html',
  styleUrls: ['./selectionneur-seance.component.css']
})
export class SelectionneurSeanceComponent implements OnInit {

  liste_groupe: Groupe[] = [];
  liste_matieres: Matiere[] = [];
  seanceCours: SeanceCours = new SeanceCours(-1, '', -1, -1, new Date(), -1, false, -1);
  emitter: EventEmitter<any> = new EventEmitter();





  constructor(private listeEtudiantsService: ListeEtudiantsService, private groupeService: GroupeService, private http: HttpClient, private datePipe: DatePipe, private selectionneurSeanceService: SelectionneurSeanceService) {
  }

  changeGroupe(nomGroupe: string) {
    for(let groupe of this.liste_groupe){
      if(groupe.nomGroupe==nomGroupe){
        this.seanceCours.idGroupe = groupe.idGroupe;
      }
    }
    this.listeEtudiantsService.setValue(nomGroupe);
  }

  changeMatiere(nomMatiere: String) {
    for (let matiere of this.liste_matieres) {
      if (matiere.nomMat == nomMatiere) {
        this.seanceCours.idMatiere = matiere.idMat;
      }
    }
  }

  changeSeance(seance: String) {
    this.seanceCours.creneauHoraire = +seance;
  }

  changeTest(value: boolean) {
    this.seanceCours.testEvaluation = value;
  }

  ngOnInit(): void {
    this.seanceCours.idEnseignant= +(String(localStorage.getItem('enseignantId')));
    this.http.get<Groupe[]>(backUrl + 'groupe').subscribe(data => this.liste_groupe = data);
    this.http.get<Matiere[]>(backUrl + 'matiere').subscribe(data => this.liste_matieres = data);
    this.selectionneurSeanceService.emitter.subscribe(()=>this.selectionneurSeanceService.addSeance(this.seanceCours));
    console.log(this.selectionneurSeanceService.getSeance());
  }

  horaires = [
    {horaireOption: "8"},
    {horaireOption: "10"},
    {horaireOption: "14"},
    {horaireOption: "16"},
  ]

  events: string[] = [];

  changeDate(type: string, event: MatDatepickerInputEvent<Date | null, unknown>) {
    this.events.push(`${type}: ${event.value}`);
    this.seanceCours.dateJour = String(this.datePipe.transform(event.value, 'yyyy-MM-dd'));
  }

  addSeance(){
    this.selectionneurSeanceService.addSeance(this.seanceCours);
    console.log(this.seanceCours);

  }


reset(){

}





}
