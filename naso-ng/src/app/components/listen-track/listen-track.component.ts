import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AudioPlayerComponent, Track } from 'ngx-audio-player';

@Component({
  selector: 'app-listen-track',
  templateUrl: './listen-track.component.html',
  styleUrls: ['./listen-track.component.scss']
})
export class ListenTrackComponent implements OnInit, AfterViewInit {

  @ViewChild(AudioPlayerComponent) audioplayer: AudioPlayerComponent;

  @Input() track: Track;

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
  }

  onEnded(event: any) {
    console.log(event);
  }

  logMe(something) {
    console.log(something);
  }

}
