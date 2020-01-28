import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { increment, decrement, reset } from '../store/home.action';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home-service.service';
import { MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';


@Component({
  selector: 'snackbar',
  templateUrl: 'snackbar-template.html',
  styles: ['message { display: flex; align-items:center; justify-content:center }']
})
export class SnackBar {
  message : string = ""
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any){
     this.message = data.message;
  }
}


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
  statuses = ['To-Do', 'In-Progress', 'Testing', 'Done']
  currentStatus: string = "";

  constructor(private store: Store<any>,
    private _snackBar: MatSnackBar,
    private router: Router, private homeService: HomeService) {
    this.data = this.router.getCurrentNavigation().extras
    if(this.data.Tasks){
      this.tasks = this.data.Tasks;
    } else {
      this.data = JSON.parse(localStorage.getItem('user'))
      this.tasks = JSON.parse(localStorage.getItem('user')).Tasks
    }
  }


  openSnackBar() {
    this._snackBar.openFromComponent(SnackBar, {
      duration: 5000,
      data: {message: "Status updated!"}
    });
  }

  onMenuClick($event) {
    
  } 

  ngOnInit() {
  }

  onStatusClick(index, taskIndex){
    this.tasks[taskIndex]['currentStatus'] = this.statuses[index]
    this.homeService.updateStatus(this.tasks[taskIndex]).subscribe((response) => {
      this.openSnackBar()
    });
  }

  ngOnDestroy() {
    
  }
}
