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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formvalues) {
    // console.log(formvalues);
    this.authService.loginUser(formvalues.username, formvalues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
