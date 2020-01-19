// import { Route } from '@angular/compiler/src/core';

import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

export const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: '**', redirectTo: '/events', pathMatch: 'full' }
];
