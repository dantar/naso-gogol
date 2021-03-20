import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { VideoData } from 'src/app/models/media.model';

@Component({
  selector: 'app-finale-premio',
  templateUrl: './finale-premio.component.html',
  styleUrls: ['./finale-premio.component.scss']
})
export class FinalePremioComponent implements OnInit {

  @Output() triggerVideo = new EventEmitter<VideoData>();
  readers: GogolReader[];

  ROW_MAX = 7;

  constructor(private changes: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(window.location.href);
    this.readers = [
      {name: 'Daniele', image: 'assets/reader-01.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Michela', image: 'assets/readers/michela-melai.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Carla', image: 'assets/readers/carla-congiu.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Nadia', image: 'assets/readers/nadia-dellacroce.jpg', video: { url: 'assets/video-01.mp4' }},
      {name: 'Michela', image: 'assets/readers/michela-podda.jpg', video: { url: 'assets/video-01.mp4' }},
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
    ]
  }

  clickReader(reader: GogolReader) {
    this.triggerVideo.emit(reader.video);
  }

  readerTransform(reader: GogolReader): string {
    let num_rows = Math.ceil(this.readers.length / this.ROW_MAX);
    let s = 100 / num_rows;
    let index = this.readers.indexOf(reader);
    let x = index % this.ROW_MAX;
    let y = (index - x) / this.ROW_MAX;
    let deltax = - s * (this.ROW_MAX-1) / 2;
    let deltay =  - s * (num_rows-1) / 2;
    let fitscale = Math.min(1, window.innerWidth / (s * this.ROW_MAX * window.innerHeight / 100));
    console.log('fitscale', window.innerWidth, (s * this.ROW_MAX), fitscale);
    return `translate(50 50) scale(${fitscale}) translate(${deltax + x * s} ${deltay + y * s}) scale(${s / 100})`;
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: any) {
    this.changes.detectChanges();
  }

}

class GogolReader {

  name: string;
  video: VideoData;
  image: string;

}