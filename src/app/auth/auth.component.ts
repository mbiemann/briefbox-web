import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  input = '';
  code = '';
  inputValid!: boolean;
  codeSent!: boolean;
  codeValid!: boolean;
  error!: boolean;

  constructor() {
    this.inputValid = false;
    this.startAgain();
  }

  validateInput() {
    this.inputValid = (this.input!='');
  }

  continueInput() {
    this.codeSent = true;
  }

  validateCode() {
    this.error = false;
    const parsedCode = Number.parseInt(this.code)
    this.codeValid = (parsedCode >= 100000 && parsedCode <= 999999);
  }

  continueCode() {
    this.error = true;
  }

  startAgain() {
    this.error = false;
    this.codeValid = false;
    this.codeSent = false;
  }

}
