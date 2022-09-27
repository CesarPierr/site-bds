import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './settings/components/config/config.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {path:'',component:FrontpageComponent},
  {path:'main',component:FrontpageComponent},
  {path:'config',component:ConfigComponent, canActivate : [AuthGuard]},
  {path:'all-teams',loadChildren : () =>import('./team/team.module').then(m=>m.TeamModule)},
  {path:'all-assos', loadChildren : () =>import('./asso/asso.module').then(m=>m.AssoModule)},
  {path:'all-events',loadChildren : () =>import('./event/event.module').then(m=>m.EventModule)},
  {path:'all-sports',loadChildren : () =>import('./sport/sport.module').then(m=>m.SportModule)},
  {path:'all-tournois', loadChildren : () =>import('./tournoi/tournoi.module').then(m=>m.TournoiModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration : "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

