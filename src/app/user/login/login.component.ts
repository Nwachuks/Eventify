import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  mouseoverLogin;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formvalues) {
    this.authService.loginUser(formvalues.username, formvalues.password).subscribe(res => {
      if (!res) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['events']);
      }
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
