import { Component, OnInit } from '@angular/core';
import { Slide } from '../models/slide.model';
import { EventService } from '../../BackEnd/services/event.service';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
  images!:Slide[];
  constructor(private eventService : EventService){}
  ngOnInit(): void {
    this.images = this.eventService.getCarousel();
    console.log(this.images)
  }

}
