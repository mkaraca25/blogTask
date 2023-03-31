import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <header>
      <nav>
        <div class="logo-container">
          <a routerLink="/" class="logo">Logo</a>
        </div>
        <button (click)="toggleMenu()" class="menu-toggle">☰</button>
        <div class="menu" [class.open]="isOpen" #menu>
          <ul>
            <li><a routerLink="/">Anasayfa</a></li>
            <li><a routerLink="/hakkimizda">Hakkımızda</a></li>
            <li><a routerLink="/urunler">Ürünler</a></li>
            <li><a routerLink="/iletisim">İletişim</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-container {
      flex-grow: 1;
    }

    .logo {
      font-size: 24px;
      color: #fff;
      text-decoration: none;
    }

    .menu-toggle {
      font-size: 24px;
      color: #fff;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: none;
    }

    .menu {
      background-color: #333;
      position: fixed;
      top: 60px;
      left: -200px;
      width: 200px;
      height: calc(100vh - 60px);
      padding-top: 20px;
      transition: all 0.3s ease-in-out;
    }

    .menu.open {
      left: 0;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0;
      padding: 0;
    }

    li a {
      display: block;
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-bottom: 1px solid #444;
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }

      nav {
        flex-direction: column;
      }

      .logo-container {
        flex-grow: initial;
        margin-bottom: 10px;
      }

      .menu {
        top: 60px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 60px);
      }

      .menu.open {
        left: 0;
      }

      li {
        border-bottom: 1px solid #444;
      }
    }
  `]
})
export class MenuComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    const menu = document.querySelector('.menu');
    if (this.isOpen) {
      menu?.classList.add('open');
    } else {
      menu?.classList.remove('open');
    }
  }

  closeMenu() {
    this.isOpen = false;
    const menu = document.querySelector('.menu')
  }
}