import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

export class TokenResponse {
  access_token: string = ''
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  public auth: boolean = false;
  public authUrl: string = '';
  public token: string = ''

  constructor(
    private http: HttpClient
  ) {
    this.checkCache();
  }

  checkCache() {
    if (localStorage.getItem("access_token") !== null && localStorage.getItem("access_token") != '') {
      this.auth = true;
      this.token = localStorage.getItem('access_token')!;
    }
  }

  setToken(access_token: string) {
    this.auth = true;
    this.token = access_token;
    console.log(this.token);
    localStorage.setItem('access_token', access_token);
  }

  logout() {
    this.auth = false;
    this.authUrl = '';
    this.token = '';
    localStorage.removeItem('access_token');
    window.location.href = environment.homeUrl;
  }

  authCode(contact_type: string, contact_value: string, next_func: ((value: Object) => void), error_func: ((err: any) => void)) {

    const headers = {
      'Content-Type': 'application/json',
    };

    let body;
    if (contact_type == 'email') {
      body = { email: contact_value }
    } else {
      body = { sms: contact_value }
    }

    const url = `${environment.apiUrl}/auth/code`;

    this.http.post(url, body, { headers }).subscribe({
      next: next_func,
      error: error_func,
    });

  }

  authToken(contact_type: string, contact_value: string, code: string, next_func: ((value: TokenResponse) => void), error_func: ((err: any) => void)) {

    const headers = {
      'Content-Type': 'application/json',
    };

    let body;
    if (contact_type == 'email') {
      body = { code: code, remember: 'Y', email: contact_value }
    } else {
      body = { code: code, remember: 'Y', sms: contact_value }
    }

    const url = `${environment.apiUrl}/auth/token`;

    this.http.post<TokenResponse>(url, body, { headers }).subscribe({
      next: next_func,
      error: error_func,
    });

  }

  getHelloWorld(next_func: ((value: Object) => void), error_func: ((err: any) => void)) {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.token,
    };

    const url = `${environment.apiUrl}/helloworld`;

    this.http.get(url, { headers }).subscribe({
      next: next_func,
      error: error_func,
    });

  }

}
