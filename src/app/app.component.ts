import { Component,OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LateralMenuComponent} from "./lateral-menu/lateral-menu.component";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {SearchpanelComponent} from "./searchpanel/searchpanel.component";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LateralMenuComponent, NgOptimizedImage, SearchpanelComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Vegeta';
  map: Map | undefined;
  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });
  }

}
