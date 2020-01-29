import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "http://localhost:3000/tasks/";

  constructor(private httpService: HttpClient) {

  }

  createTask(payload: any): Observable<any> {
    return this.httpService.post(this.url + 'create', payload)
  }

  updateStatus(payload: any): Observable<any> {
    return this.httpService.put(this.url + 'update', payload)
  }
}
