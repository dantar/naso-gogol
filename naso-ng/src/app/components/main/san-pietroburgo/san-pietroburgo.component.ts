import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TickersService } from 'src/app/services/tickers.service';
import { Track } from 'ngx-audio-player';
import { VideoData } from 'src/app/models/media.model';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { GamesCommonService } from 'src/app/services/games-common.service';

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
    trigger('nasopopup', [
      // states
      state('hidden', style({
        transform: 'translate({{x}}px,{{y}}px) scale(0) rotate(0deg)',
      }), { params: { x: 0, y: 0, s: 0.1 } }),
      state('shown', style({
        transform: 'translate({{x}}px,{{y}}px) scale(0.08) rotate(30deg) ',
      }), { params: { x: 0, y: 0, s: 1 } }),
      // transitions
      transition('hidden => shown', animate('3500ms')),
      transition('shown => hidden', animate('300ms')),
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
    private games: GamesCommonService,
  ) { }

  locations: MapLocation[];
  locationsDict: {[id: string]: MapLocation};
  location: MapLocation;
  locationScale: number = 0.1;

  visits: MapLocation[];

  track: Track;
  video: VideoData;
  panEvent: any;

  intro: boolean;

  breadDissolve: string;

  nasopopupState: string;
  currentStep: number;
  namessequence: string[];

  ngOnInit(): void {
    this.locations = [
      {
        name: 'A', state: 'mini', confirmed: 'mini', x: 10, y: 30, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      {
        name: 'B', state: 'mini', confirmed: 'mini', x: 30, y: 10, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      { name: 'C', state: 'mini', confirmed: 'mini', x: 70, y: 60, video: { url: 'assets/video-01.mp4' } },
      {
        name: 'D', state: 'mini', confirmed: 'mini', x: -10, y: 80, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      {
        name: 'E', state: 'mini', confirmed: 'mini', x: -15, y: 40, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      { name: 'F', state: 'mini', confirmed: 'mini', x: 110, y: 35, video: { url: 'assets/video-01.mp4' } },
      {
        name: 'G', state: 'mini', confirmed: 'mini', x: 45, y: 55, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      {
        name: 'H', state: 'mini', confirmed: 'mini', x: 20, y: 85, track: {
          title: 'some track',
          link: 'assets/audio-01.mp3',
        }
      },
      { name: 'I', state: 'mini', confirmed: 'mini', x: 80, y: 20, video: { url: 'assets/video-01.mp4' } },
    ];
    this.locationsDict = {};
    this.locations.forEach(l => this.locationsDict[l.name] = l);
    this.namessequence = this.locations.map(l => l.name);
    this.track = null;
    this.visits = [];
    this.panEvent = null;
    this.intro = true;
    this.breadDissolve = 'shown';
    // nasopopup
    this.nasopopupState = 'hidden';
    this.scheduleRandomNasoPopup();
    this.currentStep = 0;
  }

  clickCloseVideo() {
    this.video = null;
    if (this.location) {
      this.clickLocation(this.location);
    }
  }

  clickedScreen(event: any){
    if (this.location && this.location.confirmed === 'full') {
      this.closeCurrentLocation();
    }
  }

  clickLocation(location: MapLocation) {
    if (location.confirmed === 'full') {
      console.log('location full click', location);
    }
    if (location.name === this.namessequence[this.currentStep]) {
      this.currentStep = this.currentStep + 1;
    }
    this.visits = [];
    this.panEvent = null;
    this.locations = this.locations.filter(l => l.name != location.name);
    this.locations.push(location);
    if (!this.location) {
      this.tickers.once('toggle', 10, () => {
        this.location = location;
        this.location.state = 'full';
      });
    }
  }

  private closeCurrentLocation() {
    this.tickers.once('toggle', 5, () => {
      if (this.location) {
        this.location.state = 'mini';
      }
      this.track = null;
      this.video = null;
      this.location = null;
    });
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
    location.confirmed = event.toState;
    if (event.toState === 'full') {
      this.video = location.video;
      this.track = location.track;
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

  doneDissolve(event:any) {
    if (event.toState === 'hidden') {
      this.intro = false;
    }
  }

  introSkipped() {
    this.breadDissolve = 'hidden';
  }

  animationStateNasopopup() {
    let location = this.locationsDict[this.namessequence[this.currentStep]];
    let x = location.x + (this.nasopopupState === 'hidden' ? 0: 10);
    let y = location.y + (this.nasopopupState === 'hidden' ? 0: -2);
    return { value: this.nasopopupState, params: { x: x, y: y, s: 0.1 } };
  }

  showNaso(): boolean {
    return this.currentStep < this.namessequence.length;
  }

  animationDoneNasopopup(event: any) {
    console.log(event);
    switch (event.toState) {
      case 'hidden':
        this.scheduleRandomNasoPopup();
        break;
      case 'shown':
        this.nasopopupState = 'hidden';
        break;
      default:
        break;
    }
  }
  scheduleRandomNasoPopup() {
    this.tickers.once('nasopopup', this.games.randomInt(2000, 8000), () => {
      if (this.currentStep < this.namessequence.length) {
        this.nasopopupState = 'shown';
      }
    });
  }

}

class MapLocation {

  name: string;
  state: string;
  confirmed: string;
  x: number;
  y: number;

  video?: VideoData;
  track?: Track;

}

class Coordinates {
  x: number;
  y: number;
}