import { Component } from '@angular/core';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carouselBanner: string[] = ["Slide 1", "Slide 2", "Slide 3"];
}
