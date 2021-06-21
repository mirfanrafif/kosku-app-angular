import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../data/services/auth-service.service';
import { MyMaterialModule } from '../my-material-module/my-material.module';
import { AccountRouterModule } from './account-router.module';
import { SigninCallbackComponent } from './signin-callback/signin-callback.component';

@NgModule({
  declarations: [
    LoginComponent,
    SigninCallbackComponent
  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    AccountRouterModule
  ],
  providers: [
    AuthService
  ]
})
export class AccountModule { }
