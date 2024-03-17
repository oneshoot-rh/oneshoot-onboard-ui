import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

constructor(private cookieService: CookieService) { }


  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from the browser cookies 
    
    const token = this.cookieService.get('KEYCLOAK_IDENTITY');

    console.log('TokenInterceptor got token: ' + token);
    

    // If a token exists, clone the request and add the token to the Authorization header
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Pass the modified request to the next interceptor or handler
    return next.handle(request);
  }
}
