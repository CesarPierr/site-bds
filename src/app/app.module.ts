import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SlidesComponent } from './slides/slides.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CardListComponent } from './card-list/card-list.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from './slide/slide.component';
import { CardComponent } from './card/card.component';
import { SingleAssoComponent } from './single-asso/single-asso.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { SingleTournoiComponent } from './single-tournoi/single-tournoi.component';
import { SingleSportComponent } from './single-sport/single-sport.component';
import { AllSportsComponent } from './all-sports/all-sports.component';
import { AllAssosComponent } from './all-assos/all-assos.component';
import { AllTournoisComponent } from './all-tournois/all-tournois.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { ConfigComponent } from './config/config.component';
import { ConnectComponent } from './connect/connect.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SlidesComponent,
    FrontpageComponent,
    CardListComponent,
    FooterComponent,
    SlideComponent,
    CardComponent,
    SingleAssoComponent,
    SingleEventComponent,
    SingleTournoiComponent,
    SingleSportComponent,
    AllSportsComponent,
    AllAssosComponent,
    AllTournoisComponent,
    AllEventsComponent,
    CardGridComponent,
    ConfigComponent,
    ConnectComponent,
    AllTeamsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
