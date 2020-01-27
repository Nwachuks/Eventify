import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../user/auth-service/auth.service';
import { EventService } from '../../shared/event-service/event.service';
import { ISession } from './../../shared/event.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchTerm = '';
  foundSessions: any[];

  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

}
