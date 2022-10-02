import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { RouterModule } from '@angular/router';
import { InsideComponent } from './components/inside/inside.component';
import { SlideComponent } from './components/slide/slide.component';
import { SlidesComponent } from './components/slides/slides.component';
import { EventPresentationComponent } from './components/event-presentation/event-presentation.component';
import { EventTimelineComponent } from './components/event-timeline/event-timeline.component';



@NgModule({
  declarations: [
    CardComponent,
    CardGridComponent,
    CardListComponent,
    InsideComponent,
    SlideComponent,
    SlidesComponent,
    EventPresentationComponent,
    EventTimelineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    CardComponent,
    CardGridComponent,
    CardListComponent,
    InsideComponent,
    SlideComponent,
    SlidesComponent,
    EventTimelineComponent
  ]
})
export class UtilsModule { }
