import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../patients/patients.service';

@Component({
  selector: 'app-details-vitals',
  templateUrl: './details-vitals.component.html',
  styleUrls: ['./details-vitals.component.scss']
})
export class DetailsVitalsComponent implements OnInit {

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getVitals().subscribe(vitals => {
      console.log(vitals)
    })
  }

}
