import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanPietroburgoComponent } from './components/main/san-pietroburgo/san-pietroburgo.component';

@NgModule({
  declarations: [
    AppComponent,
    SanPietroburgoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
