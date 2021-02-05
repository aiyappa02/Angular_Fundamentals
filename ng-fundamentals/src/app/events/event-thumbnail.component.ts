import{Component, Input, Output, EventEmitter} from '@angular/core'
import { templateRefExtractor } from '@angular/core/src/render3';

@Component({
    selector : 'event-thumbnail',
    template : `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2> 
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
   
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click) = "handleClickMe()">Click Me !</button>
    </div>
    `
    // <!-- {{ }} double braces notation : Angular will look for obj  in the component( HereEventListComponent). The  obj is event. will find event.name -->
})

export class EventThumbnailComponent {

    @Input() event : any //tells angular that an event(gathering event) will be passed from another component
    @Output() eventClick = new EventEmitter() //EventEmitter is and Angular term
    
    handleClickMe(){
        console.log('Clicked!')
        this.eventClick.emit(this.event.name) //emit an event with event emitter each time the buton is clicked 
    }
}