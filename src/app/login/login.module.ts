import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { SignUpForm3Component } from './sign-up-form3/sign-up-form3.component';
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, LoginContainerComponent, SignUpForm3Component],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class LoginModule { }
