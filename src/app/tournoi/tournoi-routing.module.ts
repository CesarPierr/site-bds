import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTournoisComponent } from './components/all-tournois/all-tournois.component';
import { SingleTournoiComponent } from './components/single-tournoi/single-tournoi.component';

const routes: Routes = [
  {path : '', component : AllTournoisComponent},
  {path : ':id', component : SingleTournoiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournoiRoutingModule {}
