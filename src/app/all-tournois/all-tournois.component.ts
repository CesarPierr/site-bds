import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { TournoiService } from '../services/tournoi.service';

@Component({
  selector: 'app-all-tournois',
  templateUrl: './all-tournois.component.html',
  styleUrls: ['./all-tournois.component.scss']
})
export class AllTournoisComponent implements OnInit {

  constructor(private tournoisService : TournoiService) { }
  allTournois !: Card[];
  ngOnInit(): void {
    this.allTournois = this.tournoisService.getAllTournois()
  }

}
