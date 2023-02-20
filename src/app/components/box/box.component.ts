import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  box_id: string = 'abc123';
  message: string = 'loading...';

  constructor(
    protected backend: BackendService,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.box_id = String(this.route.snapshot.paramMap.get('id'));
    this.backend.helloWorld(value => this.message = value);
  }

}