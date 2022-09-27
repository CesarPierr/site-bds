import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTournoiComponent } from './components/single-tournoi/single-tournoi.component';
import { AllTournoisComponent } from './components/all-tournois/all-tournois.component';
import { UtilsModule } from '../utils/utils.module';
import { TournoiRoutingModule } from './tournoi-routing.module';



@NgModule({
  declarations: [
    SingleTournoiComponent,
    AllTournoisComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    TournoiRoutingModule
  ],
  exports : [
    SingleTournoiComponent,
    AllTournoisComponent
  ],
})
export class TournoiModule { }
