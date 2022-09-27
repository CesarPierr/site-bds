import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSportsComponent } from './components/all-sports/all-sports.component';
import { SingleSportComponent } from './components/single-sport/single-sport.component';

const routes: Routes = [
  {path : '', component : AllSportsComponent},
  {path : ':id', component : SingleSportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule {}
