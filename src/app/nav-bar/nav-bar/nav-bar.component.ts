import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../user/auth-service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
