import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assos } from '../models/assos.model';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})


export class AssoService {


  constructor(private http : HttpClient){}

  getAllAssos() : Observable<Assos[]> {
    return this.http.get<Assos[]>('http://localhost:3000/assos');
  }

  getAssoById(id : number) :Observable<Assos> {
    return this.http.get<Assos>(`http://localhost:3000/assos/${id}`);
  }
}

