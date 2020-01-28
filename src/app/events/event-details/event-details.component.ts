import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from './../../shared/event.model';
import { EventService } from '../../shared/event-service/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // For routing to the same component in case of search sessions
    this.route.params.forEach((params: Params) => {
      this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
        this.event = event;

        // Keep the state constant when routing to same component
        this.addMode = false;
      });
    });

    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    // Find the max of all sessions id in this event (most likely the last one)
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    // Increment the id and assign it to new session
    session.id = nextId + 1;
    this.event.sessions.push(session);

    // Make the sessions list appear again (and create new session form disappear)
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
