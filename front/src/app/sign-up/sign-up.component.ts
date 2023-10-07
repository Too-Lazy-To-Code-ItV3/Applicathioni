import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(public _service: ServiceService) { }

  User = {
    Fname: '',
    Lname: '',
    Email: '',
    Password: '',
    Username: '',
    image: ''

  }

  AddUser() {
    let data=this.User;
    this._service.create(data).subscribe((res: any) => {
      console.log("RESPONSE ", res);
      this.User = {
        Fname: '',
        Lname: '',
        Email: '',
        Password: '',
        Username: '',
        image: ''
      }
    }, err => { console.log("err", err) })
  }

}
