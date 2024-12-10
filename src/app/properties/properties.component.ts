import { Component } from '@angular/core';
import { Home } from '../interface/home';
import { HomeService } from '../services/home.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('1s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class PropertiesComponent {
itemList: Home[] = []
constructor(private homeService: HomeService) {}

ngOnInit(): void {
  this.getData();
  console.log(this.itemList)
}
getData(): void {
  this.homeService.getData().subscribe((data) => {
    this.itemList = data;
  });
}
}


