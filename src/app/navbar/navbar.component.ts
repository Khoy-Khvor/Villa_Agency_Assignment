import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  Input,
  HostListener,
  viewChild,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { BlobOptions } from 'node:buffer';

const fadeInOut = [
  trigger('fadeInOut', [
    state(
      'open',
      style({
        opacity: 1,
        transform: 'scale(1)',
        // visibility: 'hidden'
      })
    ),
    state(
      'close',
      style({
        opacity: 0,
        // display: 'flex'
        // visibility: 'visible'
        transform: 'scale(0.5)',
      })
    ),
    transition('open => close', animate('.2s ease-in')),
    transition('close => open', animate('.2s ease-out')),
  ]),
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [fadeInOut]
})
export class NavbarComponent {
  @ViewChild('navbar') navba!: ElementRef;
  hideGift: boolean = true;
  intervalId: any;
  menuActivebar: boolean = false;
  width: number = 0;
  height: number = 0;
  menu = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Properties',
      path: '/properties',
    },
    {
      name: 'Property Detail',
      path: '/property-detail',
    },
    {
      name: 'Contact Us',
      path: '/contact-us',
    },
  ];

  urlName: string = '';
  color: string = '';
  @Input() check: boolean = false;
  target: HTMLElement | undefined;

  constructor(private route: Router) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getURLname();
    this.menuActivebar = true;
    this.onResize();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
    if (this.width > 1024) {
      this.menuActivebar = true;
    } else {
      this.menuActivebar = false;
    }


    //
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.height = window.pageYOffset;
  }
  menuActive(): void {
    if (this.width <= 1024) {
      this.menuActivebar = !this.menuActivebar;
    }
  }

  getURLname(): void {
    this.urlName = this.route.url;

    console.log(this.urlName);
  }

  handleMouseLeave() {
    // Clear any previous interval to avoid creating multiple intervals
    this.hideGift = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.hideGift = false;
    }

    this.intervalId = setInterval(() => {
      this.hideGift = true;
      // Clear the interval once hideGift is set to false
      if (this.hideGift === true) {
        clearInterval(this.intervalId);
        this.hideGift = true;
      }
    }, 200);
  }
}
