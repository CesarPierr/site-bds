import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';
import { Tournoi } from '../models/tournois.model';
@Injectable({
  providedIn: 'root'
})


export class TournoiService {

  constructor(private http : HttpClient){}
  getAllTournois() : Observable<Tournoi[]> {
    return this.http.get<Tournoi[]>("http://localhost:3000/lTournois");
  }


  getTournoiById(id : number) :Observable<Tournoi> {
    return this.http.get<Tournoi>(`http://localhost:3000/lTournois/${id}`);
  }
}
