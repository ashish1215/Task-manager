import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/users/"

  constructor(private httpService: HttpClient) { }


  login(username, password) {
    return this.httpService.post(this.url + 'authenticate', {username, password})
  }





}
