import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../user/auth-service/auth.service';
import { EventService } from '../../shared/event-service/event.service';
import { ISession, IEvent } from './../../shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchTerm = '';
  foundSessions: any[];
  events: IEvent[];

  constructor(public authService: AuthService, private eventService: EventService, public route: ActivatedRoute) { }

  ngOnInit() {
    // this.events = this.route.snapshot.data['events'];
    // this.events = this.eventService.getEvents().subscribe();
    this.events = this.eventService.getEventss();
    // this.events = this.eventService.getEvents().pipe(map(events => events));
    console.log(this.events);
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

}
