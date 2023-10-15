import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  constructor(public _service: ServiceService) {
    
  }
  item={
    name:'',
    description:'',
    price:0,
    image:''
  }
  AddItem(){
    let data=this.item;
    this._service.createItem(data).subscribe((res: any) => {
      console.log("RESPONSE ", res);
      this.item = {
        name:'',
        description:'',
        price:0,
        image:''
      }
    }, err => { console.log("err", err) })
  }

  
  


}
