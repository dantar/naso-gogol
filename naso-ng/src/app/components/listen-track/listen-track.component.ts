import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-listen-track',
  templateUrl: './listen-track.component.html',
  styleUrls: ['./listen-track.component.scss']
})
export class ListenTrackComponent implements OnInit {

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;
  
  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[];

  @Input() track: Track;

  constructor() { }

  ngOnInit(): void {
    this.msaapPlaylist = [this.track];
  }

}
