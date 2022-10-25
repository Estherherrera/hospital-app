import { Component, OnInit } from '@angular/core';
import { ConsultationsService } from './consultations.service';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {

  tHead = {th1: 'Fecha de la Consulta', th2: 'Razón de la Consulta'}
  tBody = {tb1: 'consultationDate', tb2: 'reasonForConsultation'}

  constructor(public consultationsService: ConsultationsService) { }

  ngOnInit(): void {
    this.consultationsService.getConsultations()
    .subscribe(consultations => {
      this.consultationsService.consultationsFiltered$.next(consultations);
      this.consultationsService.consultations = consultations;
    })
  }

}
