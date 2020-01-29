import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { HomeService } from 'src/app/home/home-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SnackBar } from '../snackbar/snackbar.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  userForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    deadline: new FormControl(),
    lastDate: new FormControl()
  });

  constructor(private homeService: HomeService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit(){
    let payload = this.userForm.value
    payload['currentStatus'] = 'To-do'
    payload['UserId'] = JSON.parse(localStorage.getItem('user')).id
    payload['lastDate'] = moment(payload['lastDate']).format('YYYY-MM-DD')
    this.homeService.createTask(payload).subscribe((response) => {
      if(response == 'success'){
        this._snackBar.openFromComponent(SnackBar, {
          duration: 5000,
          data: {message: "Created a task!"}
        });
        this.dialog.closeAll()
      }
    })
  }
}
