import { Component, OnInit, Input} from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})

export class SlideComponent {
  time = 3000;
  @Input() slide!:Event;

  ngOnInit() {}
}
