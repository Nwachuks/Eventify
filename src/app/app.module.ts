import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';

import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionsListComponent } from './events/sessions-list/sessions-list.component';
import { UpvoteComponent } from './events/upvote/upvote.component';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CollapsibleWellComponent } from './collapsible/collapsible-well/collapsible-well.component';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';

import { DurationPipe } from './shared/duration/duration.pipe';
import { JQ_TOKEN } from './shared/jQuery.service';

import { ModalTriggerDirective } from './shared/model-trigger-directive/modal-trigger.directive';

const jQuery = window['$'];
// Lazy loaded
// import { ProfileComponent } from './user/profile/profile.component';
// import { EventService } from './shared/event.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionsListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
    // Lazy loaded
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      // Using a function to perform canDeactivate route guard
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event. Do you really want to cancel?');
  }
  return true;
}
