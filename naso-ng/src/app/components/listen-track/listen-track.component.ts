import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AudioPlayerComponent, Track } from 'ngx-audio-player';

@Component({
  selector: 'app-listen-track',
  templateUrl: './listen-track.component.html',
  styleUrls: ['./listen-track.component.scss'],
  animations: [
    trigger('mediaitem', [
      state('hidden', style({opacity: 0.5, transform: 'translate(0px,100px)'})),
      state('shown', style({opacity: 1, transform: 'translate(0px,0px)'})),
      transition('hidden => shown', animate('300ms')),
      transition('shown => hidden', animate('2000ms')),
    ]),
  ],
  
})
export class ListenTrackComponent implements OnInit, AfterViewInit {

  @ViewChild(AudioPlayerComponent) audioplayer: AudioPlayerComponent;

  @Input() track: Track;
  @Input() state: string;
  @Output() ended = new EventEmitter();

  msaapDisplayTitle = false;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = false;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;
  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[];


  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.msaapPlaylist = [this.track];
    this.state = this.state ? this.state : 'hidden';
  }

  onEnded(event: any) {
    console.log(event);
  }

  logMe(something) {
    console.log(something);
  }

}
