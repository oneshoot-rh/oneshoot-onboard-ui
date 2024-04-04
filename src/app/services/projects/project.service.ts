import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http : HttpClient) { }



  public getAllProjects(): Observable<any>{
    return this._http.get('/onboarding/api/cl/projects');
  }

  public getAllProjectAssignations(): Observable<any>{
    return this._http.get('/onboarding/api/cl/projects/assignations');
  }
}
