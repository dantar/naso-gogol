import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TickersService } from 'src/app/services/tickers.service';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-san-pietroburgo',
  templateUrl: './san-pietroburgo.component.html',
  styleUrls: ['./san-pietroburgo.component.scss'],
  animations: [
    trigger('location', [
      // states
      state('mini', style({
        transform: 'translate({{x}}px,{{y}}px) scale(0.15)',
      }), {params: {x:0, y:0}}),
      state('full', style({
        transform: 'translate(-20px,-20px) scale(1.4)',
      })),
      // transitions
      transition('mini => full', animate('1000ms')),
      transition('full => mini', animate('1000ms')),
    ]),
  ],
})
export class SanPietroburgoComponent implements OnInit {

  constructor(
    private tickers: TickersService,
  ) { }

  locations: MapLocation[];
  location: MapLocation;

  track: Track;

  ngOnInit(): void {
    this.locations = [
      {name: 'A', state: 'mini', x: 10, y:30},
      {name: 'B', state: 'mini', x: 30, y:10},
      {name: 'C', state: 'mini', x: 70, y:60},
    ];
    this.track = null;
  }

  clickLocation(location: MapLocation) {
    this.locations = this.locations.filter(l => l.name != location.name);
    this.locations.push(location);
    if (this.location) {
      this.tickers.once('toggle', 5, () => {
        this.location.state = 'mini';
        this.track = null;
        if (this.location === location) {
          this.location = null;
        }
      });
    } else {
      this.location = location;
      this.tickers.once('toggle', 5, () => {
        this.location.state = 'full';
      });
    }
  }

  locationState(location: MapLocation) {
    return {value: location.state, params: {x: location.x, y: location.y}};
  }

  animationLocationDone(event: any, location: MapLocation) {
    if (event.toState === 'full') {
      this.track = {
        title: 'some track',
        link: 'assets/audio-01.mp3',
      }
    }
  }

}

class MapLocation {

  name: string;
  state: string;
  x: number;
  y: number;

}