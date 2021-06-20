import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MyMaterialModule } from './my-material-module/my-material.module';

const oidc_configuration = 'assets/auth.clientConfiguration.json';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
