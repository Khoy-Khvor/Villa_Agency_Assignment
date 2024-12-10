import { Component } from '@angular/core';
import { Home } from '../interface/home';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  check: boolean = false;

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
