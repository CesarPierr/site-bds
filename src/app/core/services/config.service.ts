import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { switchMap,tap } from 'rxjs';
import { Cfg } from '../models/cfg.model';

@Injectable({
  providedIn: 'root'
})


export class ConfigService {

  MainConfig : Cfg = {
    mainImagesIds : [1,2,0],
    instaLink : "https://www.instagram.com/bds_tanathos/?hl=fr",
    facebookLink : "https://www.facebook.com/bds.enstaparis",
    linkedinLink : "https://www.linkedin.com/company/bds-ensta-paris/mycompany/",
    mail : "bds@ensta-paris.fr",
    logoLink : "assets/logoBDS.png",
  }
  constructor(private http : HttpClient){}
  getConfig() : Observable<Cfg> {
    return this.http.get<Cfg>('http://localhost:3000/Cfg');
  }

  belongsTo(id : number) : Observable<boolean> {
    const ret = this.http.get<Cfg>('http://localhost:3000/Cfg').pipe(map(value => value.mainImagesIds.includes(id)))
    return ret
  }

  changeId(id:number) : Observable<Cfg> {
    const ret = this.getConfig().pipe(
      tap(cfg => console.log('Count: ', id)),
      map(cfg => ({
          ...cfg,
          mainImagesIds: (cfg.mainImagesIds.includes(id) ? cfg.mainImagesIds.filter((value) => value != id) : this.add(cfg.mainImagesIds,id))
      })),
      tap(cfg => console.log('Count: ', cfg.mainImagesIds)),
      switchMap(updatedCfg => this.http.put<Cfg>(
          `http://localhost:3000/Cfg`,
          updatedCfg)
      )
    );
    console.log(ret);
    return ret
  }
  add(arr : number[], val : number) : number[]{
    arr.push(val);
    return arr;
  }
}

