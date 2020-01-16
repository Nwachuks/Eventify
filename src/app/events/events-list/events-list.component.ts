import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  eventObject = {
    id: 1,
    name: 'Angular Connect',
    date: '23/02/2020',
    time: '8:00 am',
    price: 9.99,
    imageUrl: '../../../assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  // handleClickedEvent(data) {
  //   console.log('received:', data);
  // }

  constructor() { }

  ngOnInit() {
  }

}
