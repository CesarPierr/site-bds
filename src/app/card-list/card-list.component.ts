import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() l_cards!: Card[];
  ngOnInit(): void {
  }

}
