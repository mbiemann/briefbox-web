import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { BackendService } from '../../services/backend.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string = 'loading...';

  constructor(
    protected auth: AuthService,
    protected backend: BackendService,
    protected router: Router,
  ) { }

  ngOnInit(): void {
    this.backend.helloWorld(value => this.message = value);
  }

}
