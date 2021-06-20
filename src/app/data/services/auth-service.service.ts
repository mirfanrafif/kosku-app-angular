import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthWellKnownEndpoints, OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private oidcSecurityService: OidcSecurityService) { }

  login() {
    this.oidcSecurityService.authorize()
  }

  logout() {
    this.oidcSecurityService.logoff()
  }

  getToken() {
    return this.oidcSecurityService.getToken()
  }
}
