import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSportsComponent } from './components/all-sports/all-sports.component';
import { SingleSportComponent } from './components/single-sport/single-sport.component';
import { UtilsModule } from '../utils/utils.module';
import { SportRoutingModule } from './sport-routing.module';



@NgModule({
  declarations: [
    AllSportsComponent,
    SingleSportComponent
  ],
  imports: [
    CommonModule,
    SportRoutingModule,
    UtilsModule
  ],
  exports:[
    AllSportsComponent,
    SingleSportComponent
  ]
})
export class SportModule { }
