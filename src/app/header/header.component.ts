import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  socialIcon = [
    {
      icon: 'fa-brands fa-facebook', link: 'https://web.facebook.com/KhoyKhvor'
    },
    {
      icon: 'fa-brands fa-twitter', link: '#'
    },
    {
      icon: 'fa-brands fa-invision', link: '#'
    },
    {
      icon: 'fa-brands fa-square-instagram', link: '#'
    },
      ]
}
