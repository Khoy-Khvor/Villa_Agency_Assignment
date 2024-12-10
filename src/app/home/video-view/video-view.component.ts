import { Component } from '@angular/core';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrl: './video-view.component.css'
})
export class VideoViewComponent {
infoList = [
  {
    number: 34,
    des1: 'Buildings',
    des2: 'Finished Now'
  },
  {
    number: 12,
    des1: 'Years',
    des2: 'Experience'
  },
  {
    number: 24,
    des1: 'Awwards',
    des2: 'Won 2023'
  },
]
}
