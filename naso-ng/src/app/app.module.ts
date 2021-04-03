import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanPietroburgoComponent } from './components/main/san-pietroburgo/san-pietroburgo.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ListenTrackComponent } from './components/listen-track/listen-track.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MatSliderModule } from '@angular/material/slider';
import { WatchVideoComponent } from './components/watch-video/watch-video.component';

import * as Hammer from 'hammerjs';
import { PaninoComponent } from './components/panino/panino.component';
import { FinalePremioComponent } from './components/main/finale-premio/finale-premio.component';
import { FullscreenToggleComponent } from './components/widgets/fullscreen-toggle/fullscreen-toggle.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RotateScreenComponent } from './components/main/rotate-screen/rotate-screen.component';
import { FxSpinningComponent } from './components/fx/fx-spinning/fx-spinning.component';
import { FxFadeinoutComponent } from './components/fx/fx-fadeinout/fx-fadeinout.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SanPietroburgoComponent,
    ListenTrackComponent,
    WatchVideoComponent,
    PaninoComponent,
    FinalePremioComponent,
    FullscreenToggleComponent,
    RotateScreenComponent,
    FxSpinningComponent,
    FxFadeinoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule,
    MatSliderModule,
    HammerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
