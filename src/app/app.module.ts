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
import { AuthModule, AuthWellKnownEndpoints, OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';

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
    AuthModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private oidcSecurityService: OidcSecurityService) {
    const config: OpenIdConfiguration = {
      stsServer: 'https://localhost:5001/',
      redirect_url: 'https://localhost:4200/signin-callback',
      // The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
      // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
      client_id: 'kosku',
      response_type: 'code', // 'id_token token' Implicit Flow
      scope: 'openid profile api1',
      post_logout_redirect_uri: 'https://localhost:4200/home',
      start_checksession: false,
      post_login_route: '/home',

      forbidden_route: '/Forbidden',
      // HTTP 401
      unauthorized_route: '/Unauthorized',
      log_console_warning_active: true,
      log_console_debug_active: true,
      // id_token C8: The iat Claim can be used to reject tokens that were issued too far away from the current time,
      // limiting the amount of time that nonces need to be stored to prevent attacks.The acceptable range is Client specific.
      max_id_token_iat_offset_allowed_in_seconds: 10,
    };
    const authWellKnownEndpoints: AuthWellKnownEndpoints = {
      issuer: 'https://localhost:5001/.well-known/openid-configuration/jwks',
      authorization_endpoint: 'https://localhost:5001/connect/authorize',
      token_endpoint: 'https://localhost:5001/connect/token',
      userinfo_endpoint: 'https://localhost:5001/connect/userinfo',
      end_session_endpoint: 'https://localhost:5001/connect/endsession',
      check_session_iframe: 'https://localhost:5001/connect/checksession',
      revocation_endpoint: 'https://localhost:5001/connect/revocation',
      introspection_endpoint: 'https://localhost:5001/connect/introspect',
    };

    this.oidcSecurityService.setupModule(config, authWellKnownEndpoints);
  }
}
