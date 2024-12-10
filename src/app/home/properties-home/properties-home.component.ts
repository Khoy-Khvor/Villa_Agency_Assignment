import { Component, Input } from '@angular/core';
import { title } from 'process';
import { Home } from '../../interface/home';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-properties-home',
  templateUrl: './properties-home.component.html',
  styleUrl: './properties-home.component.css',
})
export class PropertiesHomeComponent {
@Input()   itemList: Home[] = []
}
