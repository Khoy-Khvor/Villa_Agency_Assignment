import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css',
})
export class FeaturedComponent {
  nameOpen: number = 1;
  infoList = [
    {
      path: '../../../..//public/images/detailFeatured/info-icon-01.png',
      title: '250 m2',
      des: 'Total Flat Space'
    },
    {
      path: '../../../..//public/images/detailFeatured/info-icon-02.png',
      title: 'Contact',
      des: 'Contact Ready'
    },
    {
      path: '../../../..//public/images/detailFeatured/info-icon-03.png',
      title: 'Payment',
      des: 'Payment Process'
    },
    {
      path: '../../../..//public/images/detailFeatured/info-icon-04.png',
      title: 'Safety',
      des: '24/7 Under Control'
    },
  ]
  openDetail(check: number): void {
    this.nameOpen = check;

  }
}
