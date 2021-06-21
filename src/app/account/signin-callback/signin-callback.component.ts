import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth-service.service';

@Component({
  selector: 'app-signin-callback',
  templateUrl: './signin-callback.component.html',
  styleUrls: ['./signin-callback.component.css']
})
export class SigninCallbackComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParamMap.params)
    var code: string = this.route.snapshot.queryParamMap.get("code")
    var state: string = this.route.snapshot.queryParamMap.get("state")
    var sessionState: string = this.route.snapshot.queryParamMap.get("session_state")
    this.authService.signInCallback(code, state, sessionState)
  }

}
