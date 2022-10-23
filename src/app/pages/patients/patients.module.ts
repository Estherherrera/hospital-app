import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientsRoutingModule } from './patients.routing.module';
import { PatientsComponent } from './patients.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';


@NgModule({
  declarations: [
    PatientsComponent,
    DetailsPatientComponent,
    ListPatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class PatientsModule { }
