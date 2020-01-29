import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule, MatCommonModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatMomentDateModule	} from '@angular/material-moment-adapter';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBar } from './snackbar/snackbar.component';



@NgModule({
  declarations: [
    DialogComponent,
    SnackBar
  ],
  entryComponents:[DialogComponent, SnackBar],
  providers:[
      {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule	
  ]
})
export class SharedModule { }
