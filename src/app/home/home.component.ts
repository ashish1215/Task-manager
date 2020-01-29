import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { increment, decrement, reset } from '../store/home.action';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home-service.service';
import { MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { SnackBar } from '../shared/snackbar/snackbar.component';

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
    private router: Router, private homeService: HomeService,
    public dialog: MatDialog) {
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


  createNew(){
    this.openDialog()
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, { 
      height: '600px',
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
