import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { onboardingPlanRequest } from '../../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(private _http : HttpClient) { }



  public addOnboardingPlan(data: onboardingPlanRequest): Observable<any>{
    return this._http.post('/onboarding/api/cl/onboarding-plans', data);
  }

  public getOnboardingPlans(): Observable<any>{
    return this._http.get('/onboarding/api/cl/onboarding-plans');
  }



}
