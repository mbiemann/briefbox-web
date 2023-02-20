import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, ResponseAuthToken } from '../../services/auth.service';


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
    private auth: AuthService,
    private router: Router,
  ) {
    if (!this.auth.redirected && this.auth.isAuth()) {
      this.router.navigateByUrl('');
    } else {
      this.inputValid = false;
      this.startAgain();
    }
  }

  validateInput() {
    this.inputValid = (this.input != '');
    this.inputError = false;
  }

  continueInput() {
    this.sending = true;
    this.auth.authCode(
      'email',
      this.input,
      (value: Object) => {
        this.codeSent = true;
        this.inputError = false;
        this.sending = false;
      },
      (err: any) => {
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
    this.auth.authToken(
      'email',
      this.input,
      this.code,
      (value: ResponseAuthToken) => {
        this.auth.login(value.access_token)
        this.sending = false;
      },
      (err: any) => {
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