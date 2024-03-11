import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BackEndBaseUrl:string="http://localhost:4200/MobileAPI";
  optionHeaders={
    headers:new HttpHeaders({
      "Content-Type":"application/json"
    })
  }
  constructor(private http:HttpClient) { }

  SendAlerte(
    objetAlerte:any
    ,lieu:any
    ,groupePersonne:any
    ,sexe:any
    ,situationSociale:any
    ,alerteur:any
    ,degre:any
    ,descriptionObservation:any)

  {
    var body = { "objetAlerte":objetAlerte,"lieu": lieu, "groupePersonne": groupePersonne, "sexe":sexe, "situationSociale": situationSociale, "alerteur":alerteur, "degre": degre, "descriptionObservation":descriptionObservation };
    return this.http.post("http://localhost/AppAPI/DetectionSignalement/Add.php",body,this.optionHeaders);
  }


}
