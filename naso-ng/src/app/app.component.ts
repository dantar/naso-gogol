import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'naso-ng';

  constructor(private router: Router) {

  }

  clickInfo() {
    this.router.navigate(['finale']);
  }

}
