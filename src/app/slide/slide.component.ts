import { Component, OnInit, Input} from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})

export class SlideComponent {
  time = 3000;
  @Input() slide!:Card;
  @Input() index!: number;
  ngOnInit() {}
}
