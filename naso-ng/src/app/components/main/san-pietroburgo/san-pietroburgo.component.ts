import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TickersService } from 'src/app/services/tickers.service';

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
        transform: 'translate(0,0) scale(1)',
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

  ngOnInit(): void {
    this.locations = [
      {name: 'A', state: 'mini', x: 10, y:30},
      {name: 'B', state: 'mini', x: 30, y:10},
    ];
  }

  clickLocation(location: MapLocation) {
    this.locations = this.locations.filter(l => l.name != location.name);
    this.locations.push(location);
    if (this.location) {
      this.tickers.once('toggle', 5, () => {
        this.location.state = 'mini';
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

}

class MapLocation {

  name: string;
  state: string;
  x: number;
  y: number;

}