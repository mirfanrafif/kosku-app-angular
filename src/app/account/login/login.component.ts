import { Component, OnInit } from '@angular/core';
import { userRequest } from '../../data/entities/UserRequest';
import { AuthService } from '../../data/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isAuthorized = false

  ngOnInit() {
    this.authService.isAuthorized().subscribe(data => {
      this.isAuthorized = data
    })
  }

  login(username: string, password: string) {
    var userRequest: userRequest = {
      username: username,
      password: password
    }
    this.authService.login(userRequest)
  }

  logout() {
    this.authService.logout()
  }

}
