import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../php/api.service';

@Component({
  selector: 'app-detection-signalement',
  templateUrl: './detection-signalement.component.html',
  styleUrls: ['./detection-signalement.component.scss'],
})
export class DetectionSignalementComponent {

  isToastOpen = false;
  ToastMsg : any;

  objetAlerte: any;
  lieu: any;
  groupePersonne: any;
  sexe: any;
  situationSociale:any;
  alerteur :any;
  degre:any;
  descriptionObservation:any;

  constructor(private router: Router,private api:ApiService) { }

  setOpen(isOpen: boolean,msg:string) {
    this.isToastOpen = isOpen;
    this.ToastMsg=msg
  }

  async SendAlerte(){
    let ss = '';
    this.situationSociale.forEach(function (value: any) {
      ss=value+','+ss;
    });
    this.api.SendAlerte(this.objetAlerte,this.lieu,this.groupePersonne,this.sexe,ss,this.alerteur,this.degre,this.descriptionObservation).subscribe((res: any) => {
      console.log(res);
      this.setOpen(true,"شكرا لكم");
      this.objetAlerte='';
      this.lieu='';
      this.groupePersonne='';
      this.sexe='';
      this.situationSociale='';
      this.alerteur='';
      this.degre='';
      this.descriptionObservation='';
  });

  }
/*

 this.api.SendAlerte(this.objetAlerte,this.lieu,this.groupePersonne,this.sexe,this.situationSociale,this.alerteur,this.degre,this.descriptionObservation).subscribe((res: any) => {
        console.log(res);
        this.setOpen(true,"شكرا لكم");
        this.objetAlerte='';
        this.lieu='';
        this.groupePersonne='';
        this.sexe='';
        this.situationSociale='';
        this.alerteur='';
        this.degre='';
        this.descriptionObservation='';
    });
*/
}
