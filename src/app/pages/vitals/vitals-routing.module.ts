import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsVitalsComponent } from './details-vitals/details-vitals.component';

const routes: Routes = [
  {
    path: 'details-vitals',
    component: DetailsVitalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitalsRoutingModule { }
