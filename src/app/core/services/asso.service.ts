import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
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
  changeAsso(newAsso:Assos): Observable<Assos>{
    const ret = this.getAssoById(newAsso.id).pipe(
      map( Asso => ({
        ...Asso,
        title : newAsso.title,
        description : newAsso.description,
        imgLink : newAsso.imgLink,
        imgLinks : newAsso.imgLinks,
        logoLink : newAsso.logoLink,
        facebookLink : newAsso.facebookLink,
        instaLink : newAsso.instaLink,
        mailLink : newAsso.mailLink,
        linkedinLink : newAsso.linkedinLink,
        websiteLink : newAsso.websiteLink
      })),
      switchMap(updatedCfg => this.http.put<Assos>(
          `http://localhost:3000/assos/${updatedCfg.id}`,
          updatedCfg)
      )
    );
    return ret
  }
}

