import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Track } from 'ngx-audio-player';
import { TickersService } from 'src/app/services/tickers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panino',
  templateUrl: './panino.component.html',
  styleUrls: ['./panino.component.scss'],
  animations: [
    trigger('bread', [
      // states
      state('none', style({
        transform: 'scale(1.0)',
      })),
      state('up', style({
        transform: 'translate(-30px,-2px) rotate(-30deg)',
      })),
      state('down', style({
        transform: 'translateY(10px)',
      })),
      // transitions
      transition('none => up', animate('10000ms')),
      transition('none => down', animate('10000ms')),
      transition('up => none', animate('1000ms')),
      transition('down => none', animate('1000ms')),
      transition(':leave', [style({opacity: 1}), animate('1s', style({opacity: 0}))]),
    ]),
    trigger('naso', [
      // states
      state('none', style({
        transform: 'translate(39px,39px) scale(0.4) translate(-39px,-39px)',
      })),
      state('up', style({
        transform: 'translate(39px,39px) scale(1.1) translate(-39px,-39px)',
      })),
      // transitions
      transition('none => up', animate('10000ms')),
    ]),
    trigger('mediaitem', [
      state('hidden', style({opacity: 0.5, transform: 'translate(0px,200px)'})),
      state('shown', style({opacity: 1, transform: 'translate(0px,0px)'})),
      transition('hidden => shown', animate('300ms')),
      transition('shown => hidden', animate('2000ms')),
    ]),
  ],
})
export class PaninoComponent implements OnInit {

  @Output() skipped = new EventEmitter();

  breadUp: string;
  breadDown: string;

  track: Track;
  mediastate: string;
  shown: boolean;

  step: string;

  constructor(
    private tickers: TickersService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.breadUp = 'none';
    this.breadDown = 'none';
    this.track = null;
    this.mediastate = 'hidden';
    this.shown = true;
    this.step = 'spinning';
  }

  clickAnywhere() {
    switch (this.step) {
      case 'spinning':
        this.step = 'splitting';
        break;
      case 'splitting':
        this.toggleTrack();
        break;
      default:
        this.step = 'spinning';
        break;
    }
  }
  toggleTrack() {
    if (! this.track) {
      this.startIntro();
    } else {
      this.toggleMediastate();
    }
  }

  startIntro() {
    this.shown = true;
    this.breadUp = 'up';
    this.breadDown = 'down';
    this.track = {
      title: 'intro',
      link: 'assets/intro.mp3',
    };
  }

  toggleMediastate() {
    this.tickers.stop('inactive');
    this.mediastate = 'shown';
    this.tickers.once('inactive', 2000, () => {
      this.mediastate = 'hidden';
    });
  }

  clickSkip() {
    this.skipThis();
  }
  skipThis() {
    this.track = null;
    this.mediastate = 'hidden';
    this.breadUp = 'none';
    this.breadDown = 'none';
    this.shown = false;
    this.skipped.emit(true);
  }
  
  doneBreadFade(event: any) {
    if (event.toState === 'void') {
      this.skipped.emit(true);
    } else {
      console.log(event);
    }
  }

  trackEnded(event: any) {
    console.log(event);
    this.skipThis();
  }

}
