import { Component, Input, OnChanges } from '@angular/core'
import { ISession} from "../shared/index"

@Component( {
    selector : 'session-list',
    templateUrl : './session-list.component.html'
})

export class SessionListComponent implements OnChanges{
    @Input() sessions : ISession[]
    @Input() filterBy : string;
    visibleSessions : ISession[] = [];

    ngOnChanges(){ //it is run when any of the input class properties changes
        if(this.sessions){ //if we actually have sessions set
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter){
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
        }
        else{
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            })
        }
    }
}