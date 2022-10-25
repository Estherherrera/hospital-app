import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit, OnDestroy {
  
  tHead = {th1: 'Nombre', th2: 'Apellido'} 
  tBody = {tb1: 'name', tb2: 'surname'}

  constructor(public patientsService: PatientsService, private location: Location) { }

  ngOnInit(): void {
    this.patientsService.loadPatients.subscribe(() => {
      this.getPatients()
      this.location.back()
    })
    this.getPatients()
  }

  ngOnDestroy(): void {
    this.patientsService.loadPatients.unsubscribe()
  }

  getPatients(): void {
    this.patientsService.getPatients() 
    .subscribe(patients => {
      this.patientsService.patientsFiltered$.next(patients);
      this.patientsService.patients = patients;
    })
  }

  

}
