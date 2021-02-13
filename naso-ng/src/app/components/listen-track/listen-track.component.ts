import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-listen-track',
  templateUrl: './listen-track.component.html',
  styleUrls: ['./listen-track.component.scss']
})
export class ListenTrackComponent implements OnInit {

  msaapDisplayTitle = false;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = false;
  msaapDisplayRepeatControls = false;
  msaapDisplayArtist = false;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[];

  @Input() track: Track;

  constructor() { }

  ngOnInit(): void {
    this.msaapPlaylist = [this.track];
  }

  onEnded(event: any) {
    console.log(event);
  }
}
