import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Items: any[] = [];
  url = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  //User routes
  create(user: any) {
    return this.http.post(this.url + '/User/add', user);
  }

  Login(Email:string,Password:string){
    const body={Email,Password};
    return this.http.post(this.url+'/User/login',body);
  }
  //Item Routes
  createItem(item:any)
  {
    return this.http.post(this.url + '/Item/add',item);
  }
  DeleteItem(item:any)
  {
    return this.http.delete(this.url + '/Item/delete/'+item);
  }
  ShowItems()
  {
    return this.http.get(this.url + '/Item/getAll');
  }
  getItem(item:any)
  {
    return this.http.get(this.url + '/Item/get/'+item);
  }
  UpdateItem(item:any,id:any)
  {
    return this.http.put(this.url + '/Item/edit/'+id,item);
  }
}
