import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
  },
  {
    path:'vitals',
    loadChildren: () => import('./vitals/vitals.module').then(m => m.VitalsModule)
  },
  {
    path:'consultations',
    loadChildren: () => import('./consultations/consultations.module').then(m => m.ConsultationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
