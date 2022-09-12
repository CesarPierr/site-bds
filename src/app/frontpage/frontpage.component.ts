import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { Event } from 'src/app/models/event.model';
import { AssoService } from 'src/app/services/asso.service';
import { SportService } from 'src/app/services/sport.service';
import { TournoiService } from 'src/app/services/tournoi.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  lTournois!: Card[];
  lSports!:Card[];
  lAssos!:Card[];
  lImages!:Event[];
  otherCards!: Card[];
  constructor(private tournoiService:TournoiService, private sportService:SportService, private assoService : AssoService, private eventService : EventService){}
  ngOnInit(): void {
    this.lTournois = this.tournoiService.getTournoisCards();
    this.lSports = this.sportService.getSportCards()
    this.lAssos = this.assoService.getAssosCard()
    this.lImages = this.eventService.getCarousel();
  }

}
