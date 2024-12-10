import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'villa-agency-project';
  value: boolean = true;
  email: string = '';
  username: string = '';
  constructor() {
    console.log(this.valueProvince)
  }

  valueProvince: string = ''
  // FG = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  // });
  // checkBox(): void {
  //   this.value = !this.value;
  // }
  // handleClick() {

  //   console.log(this.FG)
  // }
}
