import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleEventComponent } from './components/single-event/single-event.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { UtilsModule } from '../utils/utils.module';
import { EventRoutingModule } from './event-routing.module';



@NgModule({
  declarations: [
    SingleEventComponent,
    AllEventsComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    UtilsModule
  ],
  exports : [
    SingleEventComponent,
    AllEventsComponent
  ],
})
export class EventModule { }
