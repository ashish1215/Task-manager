import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';


  constructor(private router: Router) {

  }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('user'))) {
      this.router.navigate(['home'], JSON.parse(localStorage.getItem('user')))
    }else {
      this.router.navigate(['login'])
    }
  }
}
