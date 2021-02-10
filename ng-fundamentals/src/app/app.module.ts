import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import{
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import{ NavbarComponent} from './nav/navbar.component';
import{ ToastrService } from './common/toastr.service'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide : 'canDeactivateCreateEvent',
      useValue : checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState( component : CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
