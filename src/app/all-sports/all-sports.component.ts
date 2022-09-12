import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-all-sports',
  templateUrl: './all-sports.component.html',
  styleUrls: ['./all-sports.component.scss']
})
export class AllSportsComponent implements OnInit {

  constructor(private sportService : SportService) { }
  allSports !: Card[];
  ngOnInit(): void {
    this.allSports = this.sportService.getAllSports()
  }
}
