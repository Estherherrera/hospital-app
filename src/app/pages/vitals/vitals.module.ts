import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitalsRoutingModule } from './vitals-routing.module';
import { DetailsVitalsComponent } from './details-vitals/details-vitals.component';


@NgModule({
  declarations: [
    DetailsVitalsComponent
  ],
  imports: [
    CommonModule,
    VitalsRoutingModule
  ]
})
export class VitalsModule { }
