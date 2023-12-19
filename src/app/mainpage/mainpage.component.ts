import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LateralMenuComponent} from "../lateral-menu/lateral-menu.component";
import {SearchpanelComponent} from "../searchpanel/searchpanel.component";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule, LateralMenuComponent, SearchpanelComponent, NgOptimizedImage],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit{
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
