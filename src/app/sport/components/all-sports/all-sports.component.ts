import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../../core/models/card.model';
import { SportService } from '../../../core/services/sport.service';

@Component({
  selector: 'app-all-sports',
  templateUrl: './all-sports.component.html',
  styleUrls: ['./all-sports.component.scss']
})
export class AllSportsComponent implements OnInit {

  constructor(private sportService : SportService) { }
  allSports$ !: Observable<Card[]>;
  ngOnInit(): void {
    this.allSports$ = this.sportService.getAllSports();
  }
}
