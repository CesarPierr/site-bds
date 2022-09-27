import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './components/team/team.component';
import { AllTeamsComponent } from './components/all-teams/all-teams.component';
import { UtilsModule } from '../utils/utils.module';
import { TeamRoutingModule } from './team-routing.module';



@NgModule({
  declarations: [
    TeamComponent,
    AllTeamsComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    TeamRoutingModule
  ],
  exports : [
    TeamComponent,
    AllTeamsComponent
  ]
})
export class TeamModule { }
