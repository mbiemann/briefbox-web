import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';


export class ResponseHelloWorld {
  message: string = '';
}


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  helloWorld(next_func: ((value: string) => void) = () => {}, error_func: ((err: any) => void) = () => {}) {

    this.http.get<ResponseHelloWorld>(`${environment.apiUrl}/helloworld`).pipe(
      map(
        (value) => value.message
      )
    ).subscribe({
      next: next_func,
      error: error_func,
    });

  }

}