import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { userRequest } from '../entities/UserRequest';
import { UserResponse } from '../entities/UserResponse';
import { MessageService } from './message-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private httpClient: HttpClient,
    private messageService: MessageService) {

    if (this.oidcSecurityService.moduleSetup) {
      this.doCallbackLogicIfRequired();
    } else {
      this.oidcSecurityService.onModuleSetup.subscribe(() => {
        this.doCallbackLogicIfRequired();
      });
    }

  }

  login(userRequest: userRequest) {
    // var option = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded ' })
    // }
    // var client = {
    //   client_id: "client",
    //   client_secret: "secret",
    //   grant_type: "client_credentials",
    //   scope: "api1"
    // }
    // console.log(client)
    // this.httpClient.post("https://localhost:5001/connect/token", client, option)
    //   .pipe(catchError(this.handleError('getAnakKos')))
    //   .subscribe(data => {
    //     console.log(data)
    //   })
    this.oidcSecurityService.authorize()
  }

  signInCallback(code: string, state: string, sessionState: string) {

    this.doCallbackLogicIfRequired()
    // console.log(this.getToken())
  }

  logout() {
    this.oidcSecurityService.logoff()
  }

  getToken() {
    return this.oidcSecurityService.getToken()
  }

  private doCallbackLogicIfRequired() {
    this.oidcSecurityService.authorizedCallbackWithCode(window.location.toString())
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      this.messageService.addMessage(error.statusText)

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private logoff() {
    return this.oidcSecurityService.logoff();
  }
}

// export class AuthService {
//   constructor(private httpClient: HttpClient, private messageService: MessageService) {

//   }

//   login(userRequest: userRequest) {
//     var httpOptions = {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     };
//     this.httpClient.post<UserResponse>("http://localhost:6001/user/login", userRequest, httpOptions)
//       .pipe(catchError(this.handleError<UserResponse>('getAnakKos', null)))
//       .subscribe(data => {
//         console.log(data.token)
//         localStorage.setItem("token", data.token)
//       })
//   }

//   getToken() {
//     return localStorage.getItem("token")
//   }

//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead
//       this.messageService.addMessage(error.statusText)

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }
// }
