import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TickersService } from 'src/app/services/tickers.service';
import { Track } from 'ngx-audio-player';
import { VideoData } from 'src/app/models/media.model';

@Component({
  selector: 'app-san-pietroburgo',
  templateUrl: './san-pietroburgo.component.html',
  styleUrls: ['./san-pietroburgo.component.scss'],
  animations: [
    trigger('location', [
      // states
      state('mini', style({
        transform: 'translate({{x}}px,{{y}}px) scale({{s}})',
      }), { params: { x: 0, y: 0, s: 0.1 } }),
      state('full', style({
        transform: 'translate(50px,50px) scale(1.4) ',
      })),
      // transitions
      transition('mini => full', animate('1000ms')),
      transition('full => mini', animate('1000ms')),
    ]),
    trigger('fadeinout', [
      transition(':enter', [style({opacity: 0}), animate('1s', style({opacity: 1}))]),
      transition(':leave', [style({opacity: 1}), animate('1s', style({opacity: 0}))]),
    ]),
    trigger('mediaitem', [
      transition(':enter', [style({opacity: 0}), animate('1s', style({opacity: 1}))]),
      transition(':leave', [style({opacity: 1}), animate('1s', style({opacity: 0}))]),
    ]),
    trigger('dissolve', [
      state('hidden', style({opacity: 0})),
      state('shown', style({opacity: 1})),
      transition('hidden => shown', animate('500ms')),
      transition('shown => hidden', animate('500ms')),
    ]),
  ],
})
export class SanPietroburgoComponent implements OnInit {

  constructor(
    private tickers: TickersService,
  ) { }

  locations: MapLocation[];
  location: MapLocation;
  locationScale: number = 0.1;

  visits: MapLocation[];

  track: Track;
  video: VideoData;
  panEvent: any;

  intro: boolean;

  breadDissolve: string;

  ngOnInit(): void {
    this.locations = [
      {
        name: 'A', state: 'mini', x: 10, y: 30, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      {
        name: 'B', state: 'mini', x: 30, y: 10, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      { name: 'C', state: 'mini', x: 70, y: 60, video: { url: 'assets/video-01.mp4' } },
      {
        name: 'D', state: 'mini', x: -10, y: 80, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      {
        name: 'E', state: 'mini', x: -15, y: 40, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      { name: 'F', state: 'mini', x: 110, y: 35, video: { url: 'assets/video-01.mp4' } },
      {
        name: 'G', state: 'mini', x: 45, y: 55, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      {
        name: 'H', state: 'mini', x: 20, y: 85, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      { name: 'I', state: 'mini', x: 80, y: 20, video: { url: 'assets/video-01.mp4' } },
    ];
    this.track = null;
    this.visits = [];
    this.panEvent = null;
    this.intro = true;
    this.breadDissolve = 'shown';
  }

  clickLocation(location: MapLocation) {
    this.visits = [];
    this.panEvent = null;

    this.locations = this.locations.filter(l => l.name != location.name);
    this.locations.push(location);
    if (this.location) {
      this.tickers.once('toggle', 5, () => {
        this.location.state = 'mini';
        this.track = null;
        this.video = null;
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
    return { value: location.state, params: { x: location.x, y: location.y, s: this.locationScale } };
  }

  visitedStyle(location: MapLocation) {
    return `translate(${location.x} ${location.y}) scale(0.1)`
  }
  visitsPathD(): string {
    let points = this.visits.map(l => `${l.x},${l.y}`);
    let c = this.panEventCoordinates(this.panEvent);
    points.push(`${c.x},${c.y}`);
    return `M ${points.join(' ')}`;
  }

  animationLocationDone(event: any, location: MapLocation) {
    if (event.toState === 'full') {
      this.video = location.video;
      this.track = location.track;
    }
  }

  clickCloseVideo() {
    this.video = null;
    if (this.location) {
      this.clickLocation(this.location);
    }
  }

  onPan(event: any) {
    if (event.isFinal) {
      this.visits = [];
      this.panEvent = null;
    } else {
      this.panEvent = event;
      console.log(event);
      let c: Coordinates = this.panEventCoordinates(event);
      let closeTo = this.locations
      .filter(l => (l.x-c.x)*(l.x-c.x) + (l.y-c.y)*(l.y-c.y) < 100)
      .filter(l => !this.visits.includes(l))
      .forEach(l => this.visits.push(l));      
    }
  }

  onTouchStart(event: any, location: MapLocation) {
    this.visits = [location];
  }

  panEventCoordinates(event: any): Coordinates {
    let side = Math.min(window.innerWidth, window.innerHeight);
    let ratio = 100 / side;
    return {
      x: (event.center.x - (window.innerWidth-side)/2) * ratio,
      y: (event.center.y - (window.innerHeight-side)/2) * ratio,
    }
  }

  onOverLocation(event: any, location: MapLocation) {
    console.log(event, location);
    if (this.panEvent) {
      console.log('evviva', event, location);
    }
  }

  doneDissolve(event:any) {
    console.log(event);
    if (event.toState === 'hidden') {
      this.intro = false;
    }
  }

  introSkipped() {
    console.log('intro skipped');
    this.breadDissolve = 'hidden';
  }

}

class MapLocation {

  name: string;
  state: string;
  x: number;
  y: number;

  video?: VideoData;
  track?: Track;

}

class Coordinates {
  x: number;
  y: number;
}