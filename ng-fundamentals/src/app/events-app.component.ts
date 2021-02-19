import { Component } from '@angular/core';
import { AuthService } from  './user/auth.service'

@Component({
  selector: 'events-app',
  template:`
      <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `

  // <h1>Hello world<h1>
  // <img src="/assets/images/basic-shield.png">
  // `,
   //path relative to index.html, path to assets also present in angular.json. allows webpack to include in our app bundle
  //styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
    constructor(private auth : AuthService) {}

    ngOnInit() {
      this.auth.checkAuthenticationStatus();
    }
}
