import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})
export class ModifyItemComponent {
  constructor(public _service: ServiceService,private actRoute: ActivatedRoute, private router: Router) {
    
  }
  id:any
  myFile: any;
  item = {
    name: '',
    description: '',
    price: 0,
    image: ''
  }
  ngOnInit(): void {
    this.id=this.actRoute.snapshot.paramMap.get('id') ;
    this._service.getItem(this.id).subscribe((res:any)=>{
      this.item=res;

      console.log("hero to be updated ",res)
    },err=>{
     console.log("err",err)
    })
 }

  selectFile(event: any) {
    this.myFile = event.target.files[0];

  }
  AddItem() {
    let myFormData = new FormData();
    myFormData.append('name', this.item.name);
    myFormData.append('description', this.item.description);
    myFormData.append('price', this.item.price.toString());
    if(this.myFile!=null)
    myFormData.append('image', this.myFile);



    this._service.UpdateItem(myFormData,this.id).subscribe((res: any) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product has been Modified sucessfully',
        showConfirmButton: false,
        timer: 1500
      })
    }, err => {
      console.log("err", err)
    })



  }

}
