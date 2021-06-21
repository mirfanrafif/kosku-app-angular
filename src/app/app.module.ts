import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MyMaterialModule } from './my-material-module/my-material.module';
import { AnakkosModule } from './anakkos/anakkos.module';
import { AccountModule } from './account/account.module';
import { AuthModule, AuthWellKnownEndpoints, OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';
import { AuthConfigModule } from './auth-config.module';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AnakkosModule,
    AccountModule,
    AuthConfigModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
