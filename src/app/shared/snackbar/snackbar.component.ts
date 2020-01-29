import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'snackbar',
  templateUrl: 'snackbar.component.html',
  styles: ['message { display: flex; align-items:center; justify-content:center }']
})
export class SnackBar {
  message : string = ""
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any){
     this.message = data.message;
  }
}