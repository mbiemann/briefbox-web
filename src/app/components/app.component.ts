import { Component, OnInit } from '@angular/core';

import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    protected backend: BackendService,
  ) {}

  ngOnInit(): void {
    this.backend.getHelloWorld(
      (value: Object) => {
        console.log(value);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
