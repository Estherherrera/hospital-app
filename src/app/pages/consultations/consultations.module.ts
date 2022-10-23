import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { DetailsConsultationsComponent } from './details-consultations/details-consultations.component';


@NgModule({
  declarations: [
    DetailsConsultationsComponent
  ],
  imports: [
    CommonModule,
    ConsultationsRoutingModule
  ]
})
export class ConsultationsModule { }
