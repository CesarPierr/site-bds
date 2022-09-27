import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssosComponent } from './components/all-assos/all-assos.component';
import { SingleAssoComponent } from './components/single-asso/single-asso.component';

const routes: Routes = [
  {path : '', component : AllAssosComponent},
  {path : ':id', component : SingleAssoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssoRoutingModule {}
