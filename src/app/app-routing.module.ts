import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssosComponent } from './all-assos/all-assos.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { AllSportsComponent } from './all-sports/all-sports.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { AllTournoisComponent } from './all-tournois/all-tournois.component';
import { ConfigComponent } from './config/config.component';
import { ConnectComponent } from './connect/connect.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SingleAssoComponent } from './single-asso/single-asso.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { SingleSportComponent } from './single-sport/single-sport.component';
import { SingleTournoiComponent } from './single-tournoi/single-tournoi.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'',component:FrontpageComponent},
  {path:'main',component:FrontpageComponent},
  {path:'config',component:ConfigComponent},
  {path:'connect',component:ConnectComponent},
  {path:'all-teams',component:AllTeamsComponent},
  {path:'all-assos', component:AllAssosComponent},
  {path:'all-events',component:AllEventsComponent},
  {path:'all-sports',component:AllSportsComponent},
  {path:'all-tournois',component:AllTournoisComponent},
  {path:'single-Asso/:id',component:SingleAssoComponent},
  {path:'single-event/:id',component:SingleEventComponent},
  {path:'single-sport/:id',component:SingleSportComponent},
  {path:'single-tournoi/:id',component:SingleTournoiComponent},
  {path:'team/:id',component:TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
