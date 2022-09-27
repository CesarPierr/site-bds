import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Card } from 'src/app/core/models/card.model';
import { ConfigService } from '../../../core/services/config.service';
import { EventService } from '../../../core/services/event.service';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
  @Input() images$ !:Observable<Card[]>
  constructor(private cfgService : ConfigService, private eventService : EventService){}

  ngOnInit(): void {
    this.images$ = this.eventService.getbyIds$(this.cfgService.getConfig().pipe(map(cfg => cfg.mainImagesIds)))
  }

}
