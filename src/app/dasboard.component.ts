import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  name = 'Email Editor';

  constructor(
        private router: Router,
    ) { }

  startEditor(){
    this.router.navigate(['editor']);
  }

}
