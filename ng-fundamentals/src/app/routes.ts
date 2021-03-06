import{ Routes } from '@angular/router'

import{
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent ,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
} from './events/index'

import { Error404Component } from './errors/404.component'


export const appRoutes: Routes = [
    {path : 'events/new', component : CreateEventComponent, canDeactivate : ['canDeactivateCreateEvent']}, //order matters new may be confused with :id
    {path : 'events' , component : EventsListComponent, resolve : {events: EventListResolver}},
    {path : 'events/:id', component : EventDetailsComponent, resolve : {event : EventResolver} },
    {path : 'events/session/new', component : CreateSessionComponent }, 
    // matches events like : //events/1 or /events/foo
    {path : '404' ,component :Error404Component },
    {path: '', redirectTo : '/events', pathMatch : 'full' },
    // {path: "**", redirectTo : '/404' },
    {path : 'user', loadChildren : './user/user.module#UserModule'}
    
]