import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private auth: AuthService,
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    const newReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });

    if (newReq.url.endsWith('/auth/code') || newReq.url.endsWith('/auth/token')) {
      return next.handle(newReq);
    }

    const newReqAuth = newReq.clone({
      headers: newReq.headers.set('Authorization', this.auth.token),
    });

    return next.handle(newReqAuth).pipe(
      tap({
        error: (err: HttpErrorResponse) => {
          if (err.status == 401) {
            this.auth.logout();
          }
        }
      })
    );

  }

}
