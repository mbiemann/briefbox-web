import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';


export class ResponseAuthToken {
  access_token: string = '';
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';
  url: string = '';
  redirected: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  isAuth(url: string = ''): boolean {

    if (this.token != '') {
      return true;
    }

    const token = localStorage.getItem('access_token');
    if (token !== null && token != '') {
      this.token = token;
      return true;
    }

    this.url = url;
    this.redirected = true;
    this.router.navigateByUrl('/auth');
    return false;

  }

  login(access_token: string) {

    localStorage.setItem('access_token', access_token);

    this.router.navigateByUrl(this.url);
    this.url = '';

  }

  logout(url: string = '') {

    localStorage.removeItem('access_token');

    this.token = '';
    this.url = '';

    window.location.href = url == '' ? environment.homeUrl : url;

  }

  authCode(contact_type: string, contact_value: string, next_func: ((value: Object) => void), error_func: ((err: any) => void)) {

    let body;
    if (contact_type == 'email') {
      body = { email: contact_value }
    } else {
      body = { sms: contact_value }
    }

    const url = `${environment.apiUrl}/auth/code`;

    this.http.post(url, body).subscribe({
      next: next_func,
      error: error_func,
    });

  }

  authToken(contact_type: string, contact_value: string, code: string, next_func: ((value: ResponseAuthToken) => void), error_func: ((err: any) => void)) {

    let body;
    if (contact_type == 'email') {
      body = { code: code, remember: 'Y', email: contact_value }
    } else {
      body = { code: code, remember: 'Y', sms: contact_value }
    }

    const url = `${environment.apiUrl}/auth/token`;

    this.http.post<ResponseAuthToken>(url, body).subscribe({
      next: next_func,
      error: error_func,
    });

  }

}