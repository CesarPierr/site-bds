import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../../core/models/card.model';
import { TournoiService } from '../../../core/services/tournoi.service';

@Component({
  selector: 'app-all-tournois',
  templateUrl: './all-tournois.component.html',
  styleUrls: ['./all-tournois.component.scss']
})
export class AllTournoisComponent implements OnInit {

  constructor(private tournoisService : TournoiService) { }
  allTournois$!: Observable<Card[]>;
  ngOnInit(): void {
    this.allTournois$ = this.tournoisService.getAllTournois()
  }

}
