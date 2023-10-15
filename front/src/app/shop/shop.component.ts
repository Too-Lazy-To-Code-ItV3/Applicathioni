import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(public _service: ServiceService) {
   
    
  }
  items:any;
  ngOnInit(): void {
    this._service.ShowItems().subscribe((res:any)=>{
      console.log("get items res ",res)
      this.items=res;
    },err=>{
      console.log("err",err)
    })  
  }

}

