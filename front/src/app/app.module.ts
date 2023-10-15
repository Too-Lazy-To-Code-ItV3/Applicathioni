import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddItemComponent } from './add-item/add-item.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ItemComponent } from './item/item.component';
import { ModifyItemComponent } from './modify-item/modify-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    LandingComponent,
    NavbarComponent,
    ShopComponent,
    CartComponent,
    NotfoundComponent,
    AddItemComponent,
    ItemComponent,
    ModifyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
