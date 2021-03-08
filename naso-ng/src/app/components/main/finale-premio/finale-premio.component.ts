import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VideoData } from 'src/app/models/media.model';

@Component({
  selector: 'app-finale-premio',
  templateUrl: './finale-premio.component.html',
  styleUrls: ['./finale-premio.component.scss']
})
export class FinalePremioComponent implements OnInit {

  @Output() triggerVideo = new EventEmitter<VideoData>();
  readers: GogolReader[];

  constructor() { }

  ngOnInit(): void {
    this.readers = [
      {name: 'Daniele', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Benedetta', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Chiara', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Loredana', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Andrea', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Luca', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Adele', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Enza', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Claudia', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Fabrizio', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Francesco', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Teresa', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Carmela', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Giulia', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Antonella', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Mara', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
    ]
  }

  clickReader(reader: GogolReader) {
    this.triggerVideo.emit(reader.video);
  }

}

class GogolReader {

  name: string;
  video: VideoData;
  image: string;

}