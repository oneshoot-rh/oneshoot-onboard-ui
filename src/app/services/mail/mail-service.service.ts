import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private _http: HttpClient) { }


  public getEmailTemplates() : Observable<any>{
    return this._http.get('/onboarding/api/cl/email-templates');
  }
}
