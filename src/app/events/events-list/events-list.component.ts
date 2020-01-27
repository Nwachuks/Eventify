import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './../../shared/event.model';
import { EventService } from '../../shared/event-service/event.service';
import { ToastrService } from 'src/app/shared/toastr-service/toastr.service';
// import { ToastrService } from 'ngx-toastr';

// declare let toastr;
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  // eventObject = {
  //   id: 1,
  //   name: 'Angular Connect',
  //   date: '23/02/2020',
  //   time: '8:00 am',
  //   price: 9.99,
  //   imageUrl: '../../../assets/images/angularconnect-shield.png',
  //   location: {
  //     address: '1057 DT',
  //     city: 'London',
  //     country: 'England'
  //   }
  // };

  // handleClickedEvent(data) {
  //   console.log('received:', data);
  // }

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  // handleThumbnailClick(eventName) {
  //   this.toastr.success(eventName);
  // }
}
