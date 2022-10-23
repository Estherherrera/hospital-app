import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { 

  }

  getPatient(){
    return this.http.get('http://localhost:8080/api/v1/patients');
  }
  getVitals(){
    return this.http.get('http://localhost:8080/api/v1/vitals')
  }
  getConsultations(){
    return this.http.get('http://localhost:8080/api/v1/consultation')
  }
}
