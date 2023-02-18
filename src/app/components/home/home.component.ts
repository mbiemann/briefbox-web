import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../services/backend.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    protected backend: BackendService,
    protected router: Router
  ) {}

}
