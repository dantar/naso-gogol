import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VideoData } from 'src/app/models/media.model';

@Component({
  selector: 'app-finale-premio',
  templateUrl: './finale-premio.component.html',
  styleUrls: ['./finale-premio.component.scss']
})
export class FinalePremioComponent implements OnInit {

  @Output() triggerVideo = new EventEmitter<VideoData>();
  readers: GogolReader[];

  video: VideoData;

  ROW_MAX = 9;

  constructor(
    private changes: ChangeDetectorRef,
    private router: Router,
    ) { }

  ngOnInit(): void {
    let baseurl = window.location.href.substr(0, window.location.href.indexOf('#'));
    this.readers = [
      {id: '1', name: 'Daniele', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '2', name: 'Michela', image: 'assets/readers/michela-melai.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '3', name: 'Carla', image: 'assets/readers/carla-congiu.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '4', name: 'Nadia', image: 'assets/readers/nadia-dellacroce.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '5', name: 'Michela', image: 'assets/readers/michela-podda.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '6', name: 'Luca', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '7', name: 'Adele', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '8', name: 'Enza', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '9', name: 'Claudia', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '10', name: 'Fabrizio', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '11', name: 'Francesco', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '12', name: 'Teresa', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '13', name: 'Carmela', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '14', name: 'Giulia', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '15', name: 'Antonella', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '16', name: 'Mara', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '17', name: 'Daniele', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '18', name: 'Benedetta', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '19', name: 'Chiara', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '20', name: 'Loredana', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '21', name: 'Andrea', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '22', name: 'Luca', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '23', name: 'Adele', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '24', name: 'Enza', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '25', name: 'Claudia', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '26', name: 'Fabrizio', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '27', name: 'Francesco', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
    ]
  }

  clickReader(reader: GogolReader) {
    this.video = reader.video;
    //this.triggerVideo.emit(reader.video);
  }

  readerTransform(reader: GogolReader): string {
    let ratio = 64/100; // width/height
    let width = window.innerWidth;
    let height = window.innerHeight;
    let num_rows = Math.ceil(this.readers.length / this.ROW_MAX);
    let s = 100 / num_rows;
    let index = this.readers.indexOf(reader);
    let x = index % this.ROW_MAX;
    let y = (index - x) / this.ROW_MAX;
    let deltax = - s * (this.ROW_MAX-1) / 2 * ratio;
    let deltay =  - s * (num_rows-1) / 2;
    let fitscale = Math.min(1, width / (s * this.ROW_MAX * ratio * height / 100));
    return `translate(50 50) scale(0.9) scale(${fitscale}) translate(${deltax + x * s * ratio} ${deltay + y * s}) scale(${s / 100})`;
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: any) {
    this.changes.detectChanges();
  }

  clickGoBack() {
    if (this.video) {
      this.video = null;
    } else {
      this.router.navigate(['sanpietroburgo']);
    }
  }

  clickCloseVideo() {
    this.video = null;
  }

  clickedScreen(event: any){
    this.clickCloseVideo();
  }

}

export class GogolReader {

  id: string;
  name: string;
  video: VideoData;
  image: string;

}