import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Patient } from './patient.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patientSelected$ = new BehaviorSubject<Patient | false>(false)
  patientsFiltered$ = new Subject<Patient[]>()
  patients: Patient[] = []
  loadPatients = new Subject<boolean>()
  constructor(private http: HttpClient) { 

  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(environment.baseURL + '/patients');
  }

  postPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(environment.baseURL + '/patients', patient)
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(environment.baseURL + '/patients/'+ id)
  }

  putPatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(environment.baseURL + '/patients/' + patient.patientId, patient)
  }

  
}
