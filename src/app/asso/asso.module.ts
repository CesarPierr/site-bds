import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAssosComponent } from './components/all-assos/all-assos.component';
import { SingleAssoComponent } from './components/single-asso/single-asso.component';
import { UtilsModule } from '../utils/utils.module';
import { AssoRoutingModule } from './asso-routing.module';



@NgModule({
  declarations: [
    AllAssosComponent,
    SingleAssoComponent
  ],
  imports: [
    CommonModule,
    AssoRoutingModule,
    UtilsModule
  ],
  exports : [
    AllAssosComponent,
    SingleAssoComponent
  ],
})
export class AssoModule { }
