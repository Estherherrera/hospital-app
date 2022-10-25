import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Vital } from './vital.models';

@Injectable({
  providedIn: 'root'
})
export class VitalsService {
  vitalSelected$ = new BehaviorSubject<Vital | false>(false)
  vitalsFiltered$ = new Subject<Vital[]>()
  vitals: Vital[] = [] 

  constructor(private http: HttpClient ) { }

  getVitals(): Observable<Vital[]>{
    return this.http.get<Vital[]>('http://localhost:8080/api/v1/vitals')  
  }
}
