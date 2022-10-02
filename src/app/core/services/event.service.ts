import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, map, Observable } from 'rxjs';
import { Event } from '../models/event.model';
import { event_type } from '../models/event_type.model';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})


export class EventService {

  constructor(private http: HttpClient, private cfgService : ConfigService){}

  getbyIds$(ids : Observable<number[] | null>) : Observable<Event[]> {
      return combineLatest([this.http.get<Event[]>('http://localhost:3000/events'),ids]).pipe(
        map(([l_events,ids]) => (ids == null)? []: l_events.filter( evt => ids.includes(evt.id))));
    }

  getbyIds(ids : number[]) : Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/events').pipe(map((l_events) => l_events.filter( evt => ids.includes(evt.id))));
  }

  getAllEvents() : Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/events');
  }
}
