import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';

const routes: Routes = [
  {
    path: 'list-patient',
    component: ListPatientsComponent
  },
  {
    path: 'details',
    component: DetailsPatientComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'list-patient'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
