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
// export class AuthService {
//   constructor(private oidcSecurityService: OidcSecurityService) {

//   }

//   login() {
//     this.oidcSecurityService.authorize()
//   }

//   logout() {
//     this.oidcSecurityService.logoff()
//   }

//   getToken() {
//     return this.oidcSecurityService.getToken()
//   }
// }

export class AuthService {
  constructor(private httpClient: HttpClient, private messageService: MessageService) {

  }

  login(userRequest: userRequest) {
    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.httpClient.post<UserResponse>("http://localhost:6001/user/login", userRequest, httpOptions)
      .pipe(catchError(this.handleError<UserResponse>('getAnakKos', null)))
      .subscribe(data => {
        console.log(data.token)
        localStorage.setItem("token", data.token)
      })
  }

  // logout() {
  //   this.oidcSecurityService.logoff()
  // }

  getToken() {
    return localStorage.getItem("token")
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
}
