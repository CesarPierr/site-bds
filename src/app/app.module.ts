import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { UtilsModule } from './utils/utils.module';
import { TournoiModule } from './tournoi/tournoi.module';
import { SportModule } from './sport/sport.module';
import { AssoModule } from './asso/asso.module';
import { EventModule } from './event/event.module';
import { TeamModule } from './team/team.module';
import { SettingsModule } from './settings/settings.module';
import { AuthentificationModule } from './authentification/authentification.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    UtilsModule,
    SportModule,
    AssoModule,
    EventModule,
    TeamModule,
    SettingsModule,
    AuthentificationModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue:'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
