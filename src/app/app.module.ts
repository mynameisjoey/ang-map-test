import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import {CustomReactComponentWrapperComponent} from './components/CustomReactComponentWrapper'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CustomReactComponentWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
