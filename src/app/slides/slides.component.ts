import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
  @Input() images !:Card[]
  constructor(private eventService : EventService){}
  ngOnInit(): void {}

}
