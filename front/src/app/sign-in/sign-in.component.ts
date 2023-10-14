import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private service: ServiceService,private router:Router) {}

  email='';
  password='';

  Login(){
    this.service.Login(this.email,this.password).subscribe(
      (response)=>{
        console.log("login successful");
        this.router.navigate(['/Home'])
      },
      (error)=>{
        console.error('login failed',error.error.message);
      }
    );
  }


}
