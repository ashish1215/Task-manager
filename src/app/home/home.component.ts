import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { increment, decrement, reset } from '../store/home.action';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  counter: number;
  subscriptions: Subscription[] = [];
  tasks = [];
  data: any;

  constructor(private store: Store<any>, private router: Router) {
    this.data = this.router.getCurrentNavigation().extras
    if(this.data.Tasks){
      this.tasks = this.data.Tasks;
    } else {
      this.data = JSON.parse(localStorage.getItem('user'))
      this.tasks = JSON.parse(localStorage.getItem('user')).Tasks
    }
    
  }

  onMenuClick($event) {
    
  } 

  ngOnInit() {
   
  }

  ngOnDestroy() {
    
  }
  

}
