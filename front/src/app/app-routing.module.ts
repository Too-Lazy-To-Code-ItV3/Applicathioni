import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemComponent } from './item/item.component';
import { ModifyItemComponent } from './modify-item/modify-item.component';

const routes: Routes = [
  {path: '', redirectTo: '/signIn', pathMatch: 'full' },
  {path:'signUp',component:SignUpComponent},
  {path:'signIn',component:SignInComponent},
  {path:'Home',component:LandingComponent},
  {path:'Shop',component:ShopComponent},
  {path:'Cart',component:CartComponent},
  {path:'Add',component:AddItemComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'modify/:id',component:ModifyItemComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
