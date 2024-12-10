import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

const fadeInOut = [
  trigger('fadeInOut', [
    state(
      'open',
      style({
        opacity: 1,
        transform: 'scale(1)',
      })
    ),
    state(
      'close',
      style({
        opacity: 0,
        transform: 'scale(0.5)',
      })
    ),
    transition('open => close', animate('1s ease-in')),
    transition('close => open', animate('1s ease-out')),
  ]),
];
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [fadeInOut],
})
export class SlideComponent implements OnInit, OnDestroy {
  @Input() check: boolean = false;

  imagePathName = [
    {
      path: '../../../..//public/images/slides/1.jpg',
      title: ['Toronto', 'Canada'],
      description: ['hurry!', 'get the best', 'villa for you'],
    },
    {
      path: '../../../..//public/images/slides/2.jpg',
      title: ['Miami', 'South Florida'],
      description: ['act now!', 'get the highest', 'level penthouse'],
    },
    {
      path: '../../../..//public/images/slides/3.jpg',
      title: ['Melbourne', 'Australia'],
      description: ['be quick!', 'get the best', 'villa in town'],
    },
    {
      path: '../../../..//public/images/slides/4.png',
      title: ['Villa Plus', 'Cambodia'],
      description: ['wunderfull', 'powerfull for you', 'beutiful town'],
    },
  ];

  an: boolean = false;
  indexPath: number = 0;
  slideshowInterval: any;
  i: number = 0;
  ngOnInit(): void {
    if (this.check) {
      this.slideShow();
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.slideshowInterval);
  }

  slideShow() {
    this.slideshowInterval = setInterval(() => {
      this.handleRight();
    }, 3000);
  }

  handleLeft(): void {
    this.indexPath =
      this.indexPath > 0 ? this.indexPath - 1 : this.imagePathName.length - 1;
    this.an = !this.an

  }

  handleRight(): void {
    this.an = !this.an;
    this.indexPath =
      this.indexPath < this.imagePathName.length - 1 ? this.indexPath + 1 : 0;
  }
  autoSlider(): void {
    this.slideShow();
  }

  handleClickIndex(index: number): void {
    this.indexPath = index;
    this.an = !this.an;
  }
}
