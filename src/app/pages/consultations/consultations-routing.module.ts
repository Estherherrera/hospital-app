import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsConsultationsComponent } from './details-consultations/details-consultations.component';

const routes: Routes = [
  {
    path: 'details-consultations',
    component: DetailsConsultationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationsRoutingModule { }
