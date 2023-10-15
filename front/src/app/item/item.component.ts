import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  constructor(public _service: ServiceService, private actRoute: ActivatedRoute, private router: Router) {

  }
  id: any;
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
delete()
{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {


      this._service.DeleteItem(this.id).subscribe((res:any)=>{
        //refersh automatic 
        this.ngOnInit();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
       },err=>{
         console.log("err",err)
       })

      
     
    }
  })

}
}

