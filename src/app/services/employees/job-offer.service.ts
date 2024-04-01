import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private _httpClient: HttpClient) { }




  public getJobOffers(): Observable<any> {
    return this._httpClient.get('/onboarding/api/cl/job-offers');
  }
}
