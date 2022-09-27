import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTeamsComponent } from './components/all-teams/all-teams.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {path : '', component : AllTeamsComponent},
  {path : ':id', component : TeamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule {}
