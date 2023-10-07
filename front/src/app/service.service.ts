import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Users: any[] = [];
  url = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  //User routes
  create(user: any) {
    return this.http.post(this.url + '/User/add', user);
  }
}
