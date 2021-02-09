import{ Routes } from '@angular/router'
import { EventsListComponent} from './events/events-list.component'
import{ EventDetailsComponent } from './events/event-details/event-details.component'
import{ CreateEventComponent } from './events/create-event.component'


export const appRoutes: Routes = [
    {path : 'events/new', component : CreateEventComponent}, //order matters new may be confused with :id
    {path : 'events' , component : EventsListComponent },
    {path : 'events/:id', component : EventDetailsComponent },
    // matches events like : //events/1 or /events/foo
    {path: '', redirectTo : '/events', pathMatch : 'full' }
    
]