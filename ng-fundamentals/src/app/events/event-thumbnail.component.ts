import{Component, Input} from '@angular/core'
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
            
            <span class ="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
    
    </div>
    `,
    styles: [`
        .pad-left {margin-left:10px ; 
            .well div{color : #bbb; }}
        
        `]
    // <!-- {{ }} double braces notation : Angular will look for obj  in the component( HereEventListComponent). The  obj is event. will find event.name -->
})

export class EventThumbnailComponent {

    @Input() event : any //tells angular that an event(gathering event) will be passed from another component
}