import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { PatientsComponent } from './patients.component';
import { FormPatientsComponent } from './form-patients/form-patients.component';

const routes: Routes = [
  {
    path: 'list-patient',
    component: PatientsComponent,
    children: [
      {
        path: ':id',
        component: DetailsPatientComponent 
      },
      {
        path: ':id/create',
        component: FormPatientsComponent,
        data: {
          isNew: true
        }
      },
      {
        path: ':id/edit',
        component:FormPatientsComponent
      }

    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'list-patient'
  // }
  {
    path:'list-vitals',
    loadChildren: () => import('../patients-childrens/vitals/vitals.module').then(m => m.VitalsModule)
  },
  {
    path:'list-consultations',
    loadChildren: () => import('../patients-childrens/consultations/consultations.module').then(m => m.ConsultationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
