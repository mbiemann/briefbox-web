import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(
    protected auth: AuthService,
  ) { }

}
