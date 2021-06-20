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
import { AuthModule, ConfigResult, OidcConfigService, OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';

export function loadConfig(oidcConfigService: OidcConfigService) {
  return () => oidcConfigService.load(oidc_configuration);
}
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
    AuthModule.forRoot()
  ],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [OidcConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private oidcSecurityService: OidcSecurityService, private oidcConfigService: OidcConfigService) {
    this.oidcConfigService.onConfigurationLoaded.subscribe((configResult: ConfigResult) => {

      // Use the configResult to set the configurations

      const config: OpenIdConfiguration = {
        stsServer: configResult.customConfig.stsServer,
        redirect_url: 'https://localhost:4200',
        client_id: 'client',
        scope: 'openid api1',
        response_type: 'code',
        // all other properties you want to set
      };

      this.oidcSecurityService.setupModule(config, configResult.authWellknownEndpoints);
    });
  }
}
