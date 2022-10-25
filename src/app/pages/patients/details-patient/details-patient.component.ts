import { Component, OnInit } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.scss']
})
export class DetailsPatientComponent implements OnInit {

  constructor(public patientsService: PatientsService) { }

  ngOnInit(): void {
  }
  onDelete(id: number): void{
    this.patientsService.deletePatient(id)
    .pipe(
      catchError(() => {
        return of(true)
      })
    )
    .subscribe(deletePatient => {
      console.log(deletePatient)
      this.patientsService.loadPatients.next(true)
      this.patientsService.patientSelected$.next(false)
    })
  }

}
