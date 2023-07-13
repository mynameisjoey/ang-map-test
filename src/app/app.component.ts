import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'ang-map-test';
  mapName = 'test map'
  public counter = 0;

  public handleOnClick(stateCounter: number) {
    this.counter++;
  }
  
}
