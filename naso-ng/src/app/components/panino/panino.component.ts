import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Track } from 'ngx-audio-player';
import { TickersService } from 'src/app/services/tickers.service';

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
    ]),
    trigger('fadeinout', [
      // states
      transition(':enter', [style({opacity: 0}), animate('1s', style({opacity: 1}))]),
      transition(':leave', [style({opacity: 1}), animate('1s', style({opacity: 0}))]),
    ]),
    trigger('mediaitem', [
      state('hidden', style({opacity: 0})),
      state('shown', style({opacity: 1})),
      transition('hidden => shown', animate('300ms')),
      transition('shown => hidden', animate('2000ms')),
    ]),
  ],
})
export class PaninoComponent implements OnInit {

  breadUp: string;
  breadDown: string;

  track: Track;
  mediastate: string;

  constructor(private tickers: TickersService) { }

  ngOnInit(): void {
    this.breadUp = 'none';
    this.breadDown = 'none';
    this.track = null;
    this.mediastate = 'hidden';
  }

  clickAnywhere() {
    if (! this.track) {
      this.startIntro();
    } else {
      this.toggleMediastate();
    }
  }

  startIntro() {
    this.breadUp = 'up';
    this.breadDown = 'down';
    this.track = {
      title: 'intro',
      link: 'assets/audio-01.mp3',
    };
  }

  toggleMediastate() {
    this.tickers.stop('inactive');
    this.mediastate = 'shown';
    this.tickers.once('inactive', 2000, () => {
      this.mediastate = 'hidden';
    });
  }

}
