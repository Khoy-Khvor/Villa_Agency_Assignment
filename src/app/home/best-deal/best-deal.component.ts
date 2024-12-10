import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-best-deal',
  templateUrl: './best-deal.component.html',
  styleUrl: './best-deal.component.css',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          opacity: 1,
          scale: 1,
          display: 'block'

        })
      ),
      state(
        'closed',
        style({
          opacity: .7,
          scale: 0.7,
          display: 'none'
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class BestDealComponent {
  listitem = [
    [
      {
        image: '../../../..//public/images/best-deal/deal-01.jpg',
        quantity: [
          {
            totalFlat: 185,
            floorNumber: 26,
            numberOfRoom: 4,
            parking: 'Yes',
            payment: 'Bank',
          },
        ],
        detail: [
          {
            title: 'Extra Info About Property',
            des1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.',
            des2: 'When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.',
          },
        ],
      },
    ],
    [
      {
        image: '../../../..//public/images/best-deal/deal-02.jpg',
        quantity: [
          {
            totalFlat: 250,
            floorNumber: 26,
            numberOfRoom: 5,
            parking: 'Yes',
            payment: 'Bank',
          },
        ],
        detail: [
          {
            title: 'Detail Info About Villa',
            des1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.',
            des2: 'Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.',
          },
        ],
      },
    ],
    [
      {
        image: '../../../..//public/images/best-deal/deal-03.jpg',
        quantity: [
          {
            totalFlat: 320,
            floorNumber: 34,
            numberOfRoom: 6,
            parking: 'Yes',
            payment: 'Bank',
          },
        ],
        detail: [
          {
            title: 'Extra Info About Penthouse',
            des1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.',
            des2: 'Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.',
          },
        ],
      },
    ],
  ];

  valueIndex: number = 0;

  getValue(value: number): void {
    this.valueIndex = value;
  }
}
