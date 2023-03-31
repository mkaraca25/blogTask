import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-contact-us></app-contact-us>
    <app-footer></app-footer>

  `
})
export class AppComponent {}
