import { EventService } from '../../shared/event-service/event.service';
import { IEvent } from './../../shared/event.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent: IEvent;
  isDirty = true;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  saveEvent(formValues) {
    // console.log(formValues);
    this.eventService.saveEvent(formValues);
    // Set isDirty to false to allow routing
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
