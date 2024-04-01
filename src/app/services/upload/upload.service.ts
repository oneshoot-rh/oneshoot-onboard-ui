import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {

  constructor(private http : HttpClient) { }


  public getUploads() {
    //const headers = new HttpHeaders().set('Host','org1710610247121.oneshoot.local')
    return this.http.get('/onboarding/api/cl/uploads');
  }
}
