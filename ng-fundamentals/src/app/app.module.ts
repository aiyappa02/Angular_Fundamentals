import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import{ EventThumbnailComponent} from './events/event-thumbnail.component';
import{ NavbarComponent} from './nav/navbar.component';
import{ EventService } from './events/shared/event.service'
import{ ToastrService } from './common/toastr.service'
import{ EventDetailsComponent } from './events/event-details/event-details.component'
import{ CreateEventComponent } from './events/create-event.component'
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
