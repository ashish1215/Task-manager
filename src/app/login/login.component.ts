import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl: FormControl = new FormControl('');
  passwordFormControl: FormControl = new FormControl('');
  error: any;


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn(){
    this.loginService.login(this.emailFormControl.value, this.passwordFormControl.value).subscribe((response) => {
      if(response) {
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/home'], response)
        this.error = null;
      } },
      error => {
        this.error = true;
      }
     
    )
  }

}
