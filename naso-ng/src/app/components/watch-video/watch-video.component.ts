import { Component, Input, OnInit } from '@angular/core';
import { VideoData } from 'src/app/models/media.model';

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.scss']
})
export class WatchVideoComponent implements OnInit {

  @Input() video: VideoData;

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(event: any) {
    console.log(event);
  }

}
