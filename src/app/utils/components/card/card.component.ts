import { Component, OnInit,Input } from '@angular/core';
import { Card } from 'src/app/core/models/card.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  ngOnInit(): void {
  }

}
