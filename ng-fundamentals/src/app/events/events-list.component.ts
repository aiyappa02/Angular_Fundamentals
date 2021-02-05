import { Component } from '@angular/core'
//import { time } from 'console'

@Component({
    selector : 'events-list' ,
    template : `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/> 
        <event-thumbnail (eventClick) = "handleEventClicked ($event)" 
        [event] = "event1"></event-thumbnail>
    </div>`
   
})
export class EventsListComponent {
    event1 = {
        id:1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time : '10:00 am',
        price: 599.99,
        imageUrl:'/assests/images/angularconnect-shield.png',
        location : {
            address: '1057 DT',
            city: 'London',
            country: 'England'
            //creating sample fields that we're suppossed to get from an api ideally
        }
    }

    handleEventClicked(data) {
        console.log('received : ' , data) 
       }
    
}