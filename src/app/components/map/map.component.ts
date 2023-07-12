import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  HostListener,
 } from '@angular/core';
 import { Provider } from 'react-redux';
 import * as React from 'react';
 import * as ReactDOM from 'react-dom';
 import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { KeplerGl } from 'kepler.gl';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { taskMiddleware } from 'react-palm/tasks';
import keplerGlReducer from 'kepler.gl/reducers';

interface keplerProps {
  width: number;
  height: number;
  mapboxApiAccessToken: any;
  id: string;
 }

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges, AfterViewInit {
  width: number;
  height: number;
  mapboxApiAccessToken: any = 'replaceYourAccessTokenHere'; 
  id: string = 'keplerGl';
  rootDomID: string;
  store;
 
  // rerendering the map on window resize events
  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    this.render();
  }
 
  constructor() {}
 
  ngOnInit(): void {
    let reducer = combineReducers({
      keplerGl: keplerGlReducer,
    });
    this.store = createStore(reducer, {}, applyMiddleware(taskMiddleware));
    this.rootDomID = uuid.v1();
  }
 
  ngOnChanges() {
    this.render();
  }
 
  ngAfterViewInit() {
    this.render();
  }
 
  // ngOnDestroy() {
  //   // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
  //   ReactDOM.unmountComponentAtNode(this.getRootDomNode());
  // }
 
  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    //@ts-ignore
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
 
  protected getProps(): keplerProps {
    const { width, height, mapboxApiAccessToken, id } = this;
    return {
      width: width,
      height: height,
      mapboxApiAccessToken: mapboxApiAccessToken,
      id: id,
    };
  }
 
  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  protected render() {
    this.width = window.innerWidth 
    this.height = window.innerHeight 
    if (this.isMounted()) {
      ReactDOM.render(
        React.createElement(
          Provider,
          { store: this.store },
          React.createElement(KeplerGl, this.getProps())
        ),
        this.getRootDomNode()
      );
    }
  }
 }
 
 