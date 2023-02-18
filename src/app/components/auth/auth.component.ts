import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService, TokenResponse } from '../../services/backend.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  input = '';
  code = '';
  inputValid: boolean = false;
  inputError: boolean = false;
  sending: boolean = false;
  codeSent: boolean = false;
  codeValid: boolean = false;
  codeError: boolean = false;

  constructor(
    private backend: BackendService,
    private router: Router,
  ) {
    if (this.backend.auth) {
      this.router.navigate(['']);
    } else {
      this.inputValid = false;
      this.startAgain();
    }
  }

  validateInput() {
    this.inputValid = (this.input!='');
    this.inputError = false;
  }

  continueInput() {
    this.sending = true;
    this.backend.authCode(
      'email',
      this.input,
      (value: Object) => {
        console.log(value);
        this.codeSent = true;
        this.inputError = false;
        this.sending = false;
      },
      (err: any) => {
        console.log(err);
        this.codeSent = false;
        this.inputError = true;
        this.sending = false;
      },
    );
  }

  validateCode() {
    this.codeError = false;
    const parsedCode = Number.parseInt(this.code);
    this.codeValid = (parsedCode >= 100000 && parsedCode <= 999999);
  }

  continueCode() {
    this.sending = true;
    this.backend.authToken(
      'email',
      this.input,
      this.code,
      (value: TokenResponse) => {
        console.log(value);
        this.backend.setToken(value.access_token)
        this.router.navigateByUrl(this.backend.authUrl);
        this.backend.authUrl = '';
        this.sending = false;
      },
      (err: any) => {
        console.log(err);
        this.codeError = true;
        this.sending = false;
      }
    );
  }

  startAgain() {
    this.codeError = false;
    this.codeValid = false;
    this.codeSent = false;
  }

}
