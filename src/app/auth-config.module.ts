import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule, AuthWellKnownEndpoints, OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule.forRoot()
  ]
})
export class AuthConfigModule {
  constructor(private oidcSecurityService: OidcSecurityService) {
    const config: OpenIdConfiguration = {
      stsServer: 'https://localhost:5001/',
      redirect_url: 'http://localhost:4200/signin-callback',
      // The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
      // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
      client_id: 'kosku',
      response_type: 'code', // 'id_token token' Implicit Flow
      scope: 'openid profile api1',
      post_logout_redirect_uri: '/home',
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
      issuer: 'https://localhost:5001',
      jwks_uri: 'https://localhost:5001/.well-known/openid-configuration/jwks',
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
