import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_INITIALIZER } from '@angular/core';
import { rawListeners } from 'process';
import { combineLatest, map, Observable } from 'rxjs';
import { bureau } from '../models/bureau.model';
import { Member } from '../models/member.model';
@Injectable({
  providedIn: 'root'
})


export class MemberService {
  members : Member[] = [
    {
      id : 0,
      prenom : "Benjamin",
      nom : "Catry",
      poste : bureau.Prez
    }
  ]
  constructor(private http : HttpClient){}

  getbyIds(ids : Observable<number[] | undefined>) : Observable<Member[]> {
    if (ids) {
      return combineLatest([this.http.get<Member[]>("http://localhost:3000/members"),ids]).pipe(
      map(([value,ids]) => value.filter(member => ids?.includes(member.id)) ));
    }else{
      throw new Error('members not found');
    }
  }
}
