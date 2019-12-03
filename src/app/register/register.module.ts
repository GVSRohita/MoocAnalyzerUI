import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterContainerComponent } from './register-container/register-container.component';
import { SignUpForm2Component } from './sign-up-form2/sign-up-form2.component';
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, RegisterContainerComponent, SignUpForm2Component],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class RegisterModule { }
