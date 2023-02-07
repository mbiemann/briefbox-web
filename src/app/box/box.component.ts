import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  box_id: string | undefined;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.box_id = String(this.route.snapshot.paramMap.get('id'));
  }
}
