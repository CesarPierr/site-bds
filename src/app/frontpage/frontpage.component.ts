import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card.model';
import { Event } from 'src/app/core/models/event.model';
import { AssoService } from 'src/app/core/services/asso.service';
import { SportService } from 'src/app/core/services/sport.service';
import { TournoiService } from 'src/app/core/services/tournoi.service';
import { EventService } from 'src/app/core/services/event.service';
import { ConfigService } from '../core/services/config.service';
import { Cfg } from '../core/models/cfg.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  lTournois$!: Observable<Card[]>;
  lSports$!:Observable<Card[]>;
  lAssos$!:Observable<Card[]>;
  lImages$!:Observable<Event[]>;
  otherCards$!: Observable<Card[]>;
  cfg$!:Observable<Cfg>;
  constructor(private cfgService : ConfigService,private tournoiService:TournoiService, private sportService:SportService, private assoService : AssoService, private eventService : EventService){}
  ngOnInit(): void {
    this.cfg$ = this.cfgService.getConfig()
    this.lTournois$ = this.tournoiService.getAllTournois();
    this.lSports$ = this.sportService.getAllSports()
    this.lAssos$ = this.assoService.getAllAssos()
    this.lImages$ = this.eventService.getbyIds$(this.cfg$.pipe(map(value => value.mainImagesIds)));
  }

}
