import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'ang-map-test';
  'https://gist.githubusercontent.com/leighhalliday/a994915d8050e90d413515e97babd3b3/raw/a3eaaadcc784168e3845a98931780bd60afb362f/covid19.json'

  mapName =   'https://gist.githubusercontent.com/mynameisjoey/15c0208b75d4ea4d10fca10ae22edee9/raw/0401637412fe114a56cabbff2be8da4f1b4419d0/testmap.geojson'
  public counter = 0;

  public handleOnClick(stateCounter: number) {
    this.counter++;
  }
  
}
