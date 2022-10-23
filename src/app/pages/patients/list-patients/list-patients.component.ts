import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss'],
  providers: [DecimalPipe],
})
export class ListPatientsComponent implements OnInit {
  patients$!: Observable<any>
	filter = new FormControl('', { nonNullable: true });
  patients: any = [];

  constructor(private patientsService: PatientsService, pipe: DecimalPipe) {
 }

  ngOnInit(): void { 
    this.patientsService.getPatient()
      /* .pipe(
        map((resp: any) => {
          return resp.data;
        })
      ) */
      .subscribe(patients => {
        this.patients = patients;
        this.patients$ = of(patients);
      })
      this.filter.valueChanges.pipe(
        startWith(''),
        filter(() => this.patients.length>0),
        map((text) => this.search(text)),
      ).subscribe(miguel => {
        this.patients$ = of(miguel);
      })
  }

  search(text: string): any {
    console.log(text);
   return this.patients.filter((patient: any) => {
      const term = text.toLowerCase();
      return (
        patient.name.toLowerCase().includes(term) ||
        patient.surname.toLowerCase().includes(term)
      );
    });
 
  }



}


