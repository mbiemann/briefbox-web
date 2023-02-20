import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { BackendService } from '../../services/backend.service';


export interface BoxObject {
  name: string;
  created: string;
  left: string;
  progress: number;
  public: boolean;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string = 'loading...';
  showDatetime: boolean = false;
  boxes: BoxObject[] = [
    {name: 'a0f2eddc-85ac-4344-9efc-8aa232f57e93', created: '20/02/23 18:17:15', left:'2 minutes', progress: 10, public: false},
    {name: '7d86c319-b607-44b4-ab93-f1c2555a28ac', created: '20/02/23 18:17:15', left:'8 hours', progress: 20, public: false},
    {name: '28935a39-f0bc-406c-ac41-88b9d42b3645', created: '20/02/23 18:17:15', left:'16 hours', progress: 60, public: true},
    {name: '1dc18286-5cb1-4528-b6eb-779dd3a5d769', created: '20/02/23 18:17:15', left:'3 days', progress: 80, public: true},
  ];

  constructor(
    protected auth: AuthService,
    protected backend: BackendService,
    protected router: Router,
  ) { }

  ngOnInit(): void {
    this.backend.helloWorld(value => this.message = value);
  }

  newBox() {
    this.boxes = [
      {name: 'a0f2eddc-85ac-4344-9efc-8aa232f57e93', created: '20/02/23 18:17:15', left:'2 minutes', progress: 10, public: false},
      {name: '7d86c319-b607-44b4-ab93-f1c2555a28ac', created: '20/02/23 18:17:15', left:'12 hours', progress: 20, public: false},
      {name: '28935a39-f0bc-406c-ac41-88b9d42b3645', created: '20/02/23 18:17:15', left:'16 hours', progress: 60, public: true},
      {name: '1dc18286-5cb1-4528-b6eb-779dd3a5d769', created: '20/02/23 18:17:15', left:'3 days', progress: 80, public: true},
      {name: '35be5500-5ce3-49e7-a1d2-4dcb0ec4a12d', created: '20/02/23 18:17:15', left:'7 days', progress: 100, public: false},
    ];
  }

  deleteBox(boxId: string) {
    this.boxes = this.boxes.filter(value => value.name != boxId);
  }

}
