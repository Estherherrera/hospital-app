import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../patients/patients.service';

@Component({
  selector: 'app-details-consultations',
  templateUrl: './details-consultations.component.html',
  styleUrls: ['./details-consultations.component.scss']
})
export class DetailsConsultationsComponent implements OnInit {

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getConsultations().subscribe(consultation => {
      console.log(consultation)
    })
  }

}
