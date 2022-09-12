import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {

  constructor() { }
  @Input() Cards!: Card[];
  ngOnInit(): void {
  }

}
