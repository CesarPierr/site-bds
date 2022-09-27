import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './components/config/config.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfigComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [
    ConfigComponent
  ]
})
export class SettingsModule { }
