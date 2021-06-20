import { Component, OnInit } from '@angular/core';
import { AuthService } from '../data/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login()
  }

  getToken(): string {
    var token = this.authService.getToken()
    console.log(token)
    return token
  }

}
