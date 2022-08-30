export class SeanceCours{
  creneauHoraire: number;
  dateJour: Date | String;
  idEnseignant: number;
  idGroupe: number;
  idMatiere: number;
  idSeance: number;
  testEvaluation: boolean;
  constructor( idSeance : number, nomMatiere:String , idMatiere: number,  creneauHoraire:number,   dateJour:Date | String,  idEnseignant : number ,  testEvaluation:boolean ,idGroupe:number) {
    this.idSeance= idSeance;
    this.idMatiere = idMatiere;
    this.idGroupe = idGroupe;
    this.creneauHoraire = creneauHoraire;
    this.dateJour = dateJour;
    this.idEnseignant = idEnseignant;
    this.testEvaluation = testEvaluation;

  }
}
