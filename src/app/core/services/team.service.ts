import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Member } from '../models/member.model';
import { Team } from '../models/team.model';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root'
})


export class TeamService {
  constructor(private memberService : MemberService, private http:HttpClient){}

  getAllTeams() : Observable<Team[]> {
    return this.http.get<Team[]>("http://localhost:3000/lTeam");
  }

  getLastTeam() : Observable<Team> {
    return this.http.get<Team[]>("http://localhost:3000/lTeam").pipe(map(value => value[-1]));
  }

  getAllMemberbyTeamId(id : number) : Observable<Member[]> {
    const ids =  this.http.get<Team[]>("http://localhost:3000/lTeam").pipe(map(value => value.find(team => team.id == id)?.membersId));

    return this.memberService.getbyIds(ids);
  }
}
