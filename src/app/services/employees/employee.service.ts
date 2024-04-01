import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../components/employee-management/employees/employees.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) { }


  public getEmployees() : Observable<any>{
    return this._http.get('/onboarding/api/cl/employees');
  }
}
