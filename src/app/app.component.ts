import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kosku-app';
  opened: boolean;

  constructor(public oidcSecurityService: OidcSecurityService) { }

  ngOnInit() {
    this.oidcSecurityService.getIsAuthorized().subscribe(auth => {
      console.log(auth)
    })

    this.oidcSecurityService.getUserData().subscribe(userData => {
      console.log(userData)
    });
  }
}
