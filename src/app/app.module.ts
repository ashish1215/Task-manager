import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, SnackBar } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/home.reducer';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    LoginComponent,
    SnackBar
  ],
  entryComponents:[
    SnackBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    StoreModule.forRoot({ count: counterReducer }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
