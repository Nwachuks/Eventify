import { Injectable } from '@angular/core';
import { EventService } from '../event-service/event.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Convert to number, then convert to boolean
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/not_found']);
    }

    return eventExists;
  }
}
