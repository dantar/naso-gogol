import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GogolReader, VideoData } from 'src/app/models/media.model';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-finale-premio',
  templateUrl: './finale-premio.component.html',
  styleUrls: ['./finale-premio.component.scss']
})
export class FinalePremioComponent implements OnInit {

  @Output() triggerVideo = new EventEmitter<VideoData>();
  readers: GogolReader[];

  video: VideoData;

  ROW_MAX = 7;

  constructor(
    private changes: ChangeDetectorRef,
    private router: Router,
    private shared: SharedDataService,
    ) { }

  ngOnInit(): void {
    this.readers = this.shared.readers;
  }

  clickReader(reader: GogolReader) {
    this.video = reader.video;
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

  readerStyle(reader:GogolReader): string {
    let opacity = reader.video != null ? 1: 0.3;
    return `opacity: ${opacity};`;
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

