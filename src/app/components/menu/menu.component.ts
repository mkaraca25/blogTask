import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isFixedNavbar: boolean;
  @HostBinding('class.navbar-opened') navbarOpened = false;

  constructor() {
    this.isFixedNavbar = false;
  }

  ngOnInit() {
    
    const menuItems = document.querySelectorAll('.header_main a');

    
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        this.navbarOpened = false;
      });
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

}
