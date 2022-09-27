import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { SingleEventComponent } from './components/single-event/single-event.component';

const routes: Routes = [
  {path : '', component : AllEventsComponent},
  {path : ':id', component : SingleEventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {}
