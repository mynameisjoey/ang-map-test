import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'ang-map-test';
  'https://gist.githubusercontent.com/leighhalliday/a994915d8050e90d413515e97babd3b3/raw/a3eaaadcc784168e3845a98931780bd60afb362f/covid19.json'

  mapName =   'https://gist.githubusercontent.com/mynameisjoey/b31441e9b209ef85097408d6c1c1d767/raw/8b45dd4cfbb5c414a0d341eb7e7ba1222275d046/example2.geojson'
  public counter = 0;

  public handleOnClick(stateCounter: number) {
    this.counter++;
  }
  
}
