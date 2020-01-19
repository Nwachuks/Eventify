import { EventService } from './../../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/shared/toastr.service';
import { ActivatedRoute } from '@angular/router';

// declare let toastr;
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];
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

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
