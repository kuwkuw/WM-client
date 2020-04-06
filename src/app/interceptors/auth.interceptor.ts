import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('AuthInterceptor');
    if (!request.url.includes('/api/auth')) {
      const accessToken = localStorage.getItem('access_token');

      if (accessToken) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`
          }
        });
      }
    }

    return next.handle(request);
  }
}
