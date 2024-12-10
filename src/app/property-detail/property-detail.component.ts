import { Component } from '@angular/core';

import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';
import { MessageService } from 'primeng/api';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const fadeIn = [
  trigger('fadeIn', [
    state(
      'open',
      style({
        opacity: 1,
        position: 'relative',

      })
    ),
    state(
      'close',
      style({
        opacity: 0,
        position: 'absolute',
        top: '-90px',
        left: '0'
      })
    ),
    transition('open => close', animate('.4s ease-in')),
    transition('close => open', animate('.4s ease-out')),
  ])
];

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css',
  animations: [fadeIn],
})
export class PropertyDetailComponent {
  // items = [
  //   { label: 'Dashboard', icon: 'pi pi-home', badge: 'New', shortcut: 'Ctrl+D' },
  //   { label: 'Profile', icon: 'pi pi-user', badge: '5', shortcut: 'Ctrl+P' },
  //   // more items
  // ];

  infoList = [
    {
      path: '../../../..//public/images/detailFeatured/info-icon-01.png',
      title: '250 m2',
      des: 'Total Flat Space',
    },
    {
      path: '../../../..//public/images/detailFeatured/info-icon-02.png',
      title: 'Contact',
      des: 'Contact Ready',
    },
    {
      path: '../../../..//public/images/detailFeatured/info-icon-03.png',
      title: 'Payment',
      des: 'Payment Process',
    },
    {
      path: '../../../..//public/images/detailFeatured/info-icon-04.png',
      title: 'Safety',
      des: '24/7 Under Control',
    },
  ];
  nameOpen: number = 0;

  openDetail(check: number): void {
    this.nameOpen = check;
  }
}
