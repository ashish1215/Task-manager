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

  constructor(private store: Store<any>, private router: Router) {
    let data:any = this.router.getCurrentNavigation().extras
    this.tasks = data.Tasks;
   }

  onMenuClick($event) {
    
  } 

  ngOnInit() {
   
  }

  ngOnDestroy() {
    
  }

}
