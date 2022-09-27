import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';
import { Sport } from '../models/sports.model';

@Injectable({
  providedIn: 'root'
})


export class SportService {

  constructor(private http : HttpClient){}
  getAllSports() : Observable<Sport[]> {
    return this.http.get<Sport[]>("http://localhost:3000/lSports")
  }

  getSportById(id : number) :Observable<Sport> {
    return this.http.get<Sport>(`http://localhost:3000/lSports/${id}`);
  }
}
