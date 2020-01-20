import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivatorService } from './shared/event-route-activator.service';
import { EventsListResolverService } from './shared/events-list-resolver.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: 'not_found', component: NotFoundComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: '**', redirectTo: '/events', pathMatch: 'full' }
];
